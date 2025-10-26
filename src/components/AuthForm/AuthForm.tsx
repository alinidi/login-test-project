import { useForm, type SubmitHandler } from 'react-hook-form';
import type { FormData } from '../../types/types';
import s from './AuthForm.module.scss';
import { useState, type ChangeEvent } from 'react';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem(
      'user',
      JSON.stringify({ inputLoginValue, inputPasswordValue })
    );
    console.log(data);
  };

  const [inputLoginValue, setInputLoginValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputLoginValue(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPasswordValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.field}>
        <label htmlFor="login">Логин</label>
        <input
          {...register('login', {
            required: true,
            minLength: 1,
          })}
          aria-invalid={errors.login ? 'true' : 'false'}
          type="text"
          name="login"
          placeholder="Введите свой логин"
          onChange={handleLoginChange}
          value={inputLoginValue}
        />
        {errors.login?.type === 'required' && (
          <p role="alert" className={s.error}>
            Логин должен содержать минимум 1 символ
          </p>
        )}
      </div>
      <div className={s.field}>
        <label htmlFor="password">Пароль</label>
        <input
          {...register('password', {
            required: true,
            minLength: 8,
          })}
          aria-invalid={errors.password ? 'true' : 'false'}
          type="text"
          name="password"
          placeholder="Введите свой пароль"
          onChange={handlePasswordChange}
          value={inputPasswordValue}
        />
        {errors.password?.type === 'required' && (
          <p role="alert" className={s.error}>
            Пароль должен содержать минимум 8 символов
          </p>
        )}
      </div>
      <button type="submit">Войти</button>
    </form>
  );
}
