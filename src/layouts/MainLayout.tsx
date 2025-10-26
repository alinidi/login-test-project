import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import s from './MainLayout.module.scss';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
}
