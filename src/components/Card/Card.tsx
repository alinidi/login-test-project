import type { CardProps } from '../../types/types';
import s from './Card.module.scss';
import '../../index.css';

export default function Card({ source, title }: CardProps) {
  return (
    <div className={s.card}>
      <img src={source} alt="pic" />
      <h2 className={s.header}>{title}</h2>
      <span></span>
      <p>Рыба текст</p>
    </div>
  );
}
