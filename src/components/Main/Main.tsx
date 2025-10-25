import s from './Main.module.scss';
import Welcome from '../Welcome/Welcome';
import Options from '../Options/Options';

export default function Main() {
  return (
    <div className={s.main}>
      <Welcome />
      <Options />
    </div>
  );
}
