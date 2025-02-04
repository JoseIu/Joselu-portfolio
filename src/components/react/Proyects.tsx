import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';
import { ProyectCard } from './ProyectCard';
import './proyects.css';

type Props = {
  initialProyects: CollectionEntry<'projects'>[];
};

const TAGS = ['React', 'Next.js', 'Astro', 'Angular', 'JavaScript', 'TypeScript'];
export const Proyects = ({ initialProyects }: Props) => {
  const [proyects, setProyects] = useState(initialProyects);
  const [filterByTag, setFilterByTag] = useState<Set<string>>(new Set());
  const toggleTag = (tag: string) => {
    setFilterByTag(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(tag)) {
        newFilters.delete(tag);
      } else {
        newFilters.add(tag);
      }
      return newFilters;
    });
  };

  const filteredProyects = proyects.filter(proyect =>
    Array.from(filterByTag).every(tag => {
      const tagLowerCase = tag.toLowerCase();
      const tagsLowerCase = proyect.data.tags.map(tag => tag.toLowerCase());
      return tagsLowerCase.includes(tagLowerCase);
    })
  );

  return (
    <>
      <div>
        <p className="filters-title smoke">Filtros</p>
        <div className="filters">
          {TAGS.map(tag => (
            <button
              key={tag}
              className={`filters__tag ${filterByTag.has(tag) ? 'filters__tag--active' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              <svg
                width="30px"
                height="30px"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  {filterByTag.has(tag) && (
                    <path
                      d="M9 12L10.6828 13.6828V13.6828C10.858 13.858 11.142 13.858 11.3172 13.6828V13.6828L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  )}
                </g>
              </svg>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <section>
        <h2 className="proyects-title smoke">
          Mostrando {filteredProyects.length} de {initialProyects.length} proyetos
        </h2>
        <div className="proyects__list">
          {filteredProyects.map(proyect => (
            <ProyectCard key={proyect.slug} proyect={proyect} />
          ))}
        </div>
      </section>
    </>
  );
};
