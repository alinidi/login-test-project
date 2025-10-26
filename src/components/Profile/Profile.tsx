import { Buttons } from '../../common/Buttons/Buttons';
import s from './Profile.module.scss';

export default function Profile({ name }: { name: string }) {
  return (
    <div className={s.profile}>
      <h1>Привет, {name}</h1>
      <Buttons
        firstButton="Выйти из аккаунта"
        secondButton="Перейти в контакты"
      />
    </div>
  );
}
