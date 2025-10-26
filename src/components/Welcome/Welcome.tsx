import { Buttons } from '../../common/Buttons/Buttons';
import s from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div className={s.welcome}>
      <h1>Место для получения медицинской помощи</h1>
      <div className={s.buttons}>
        <Buttons firstButton="Войти" secondButton="Контакты" />
      </div>
    </div>
  );
}
