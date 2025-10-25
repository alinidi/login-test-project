import logo from "../../assets/logo.svg";
import "../../index.css";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.linkButtonWrapper}>
        <a href="#">Контакты</a>
        <button>Войти</button>
      </div>
    </div>
  );
}
