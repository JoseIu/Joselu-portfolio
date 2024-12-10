import './chips.css';
type Props = {
  tegnologies: string[];
};
export const Chips = ({ tegnologies }: Props) => {
  return (
    <ul className="chips">
      {tegnologies.map((teg, index) => {
        return (
          <li key={teg + index} className="chip">
            {teg}
          </li>
        );
      })}
    </ul>
  );
};
