import './chips.css';
type Props = {
  tegnologies: string[];
};
export const Chips = ({ tegnologies }: Props) => {
  return (
    <ul className="chips">
      {tegnologies.map(teg => {
        return (
          <li key={teg} className="chip">
            {teg}
          </li>
        );
      })}
    </ul>
  );
};
