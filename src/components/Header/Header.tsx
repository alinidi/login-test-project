import { useState } from 'react';
import logo from '../../assets/logo.svg';
import '../../index.css';
import s from './Header.module.scss';
import Modal from '../Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.linkButtonWrapper}>
        <a href="#">Контакты</a>
        <button onClick={toggleModal}>Войти</button>

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <AuthForm />
          </Modal>
        )}
      </div>
    </header>
  );
}
