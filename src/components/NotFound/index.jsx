import React from 'react';
import style from './NotFound.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>🐱‍👤</span>
        <br />
        Ничего не найдено!
      </h1>
      <p className={style.description}>К сожалению произошла ошибка</p>
    </div>
  );
};
