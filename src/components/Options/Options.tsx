import s from './Options.module.scss';
import heart from '../../assets/circle sec-.svg';
import emergency from '../../assets/circle sec- (1).svg';
import papers from '../../assets/circle sec- (2).svg';
import Card from '../Card/Card';
import type { CardProps } from '../../types/types';

const options: CardProps[] = [
  { source: heart, title: 'Онлайн-прием' },
  { source: emergency, title: 'Экстренный Случай' },
  { source: papers, title: 'Лечение рака' },
];

export default function Options() {
  return (
    <div className={s.options}>
      {options.map((option, index) => (
        <Card key={index} source={option.source} title={option.title} />
      ))}
    </div>
  );
}
