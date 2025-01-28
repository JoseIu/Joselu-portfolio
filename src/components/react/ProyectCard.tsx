import type { CollectionEntry } from 'astro:content';
import { Chips } from './Chips';
import './proyectCard.css';

type Props = {
  proyect: CollectionEntry<'projects'>;
};
export const ProyectCard = ({ proyect }: Props) => {
  const { title, summary, isInConstruction, tags } = proyect.data;

  return (
    <article className="proyect">
      <a className="proyect__link" href={`/info-proyects/${proyect.slug}`}>
        <header className="proyect__header">
          <h2 className="proyect__title" style={{ viewTransitionName: `${title}-title` }}>
            {/* <Folder className="proyect__icon" /> */}
            {title}
          </h2>
        </header>
        <div className="proyect__content">
          {isInConstruction && <span className="building">En desarrollo</span>}
          <span className="smoke">{summary}</span>

          <Chips tegnologies={tags} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <line x1="5" y1="12" x2="19" y2="12" className="line"></line>
          <polyline points="12 5 19 12 12 19" className="arrow"></polyline>
        </svg>
      </a>
    </article>
  );
};
