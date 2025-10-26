import type { ButtonsProps } from '../../types/types';
import s from './Buttons.module.scss';

export const Buttons = ({ firstButton, secondButton }: ButtonsProps) => {
  return (
    <div className={s.buttons}>
      <button>{firstButton}</button>
      <button>{secondButton}</button>
    </div>
  );
};
