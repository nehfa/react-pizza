import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import style from './Search.module.scss';
import searchLogo from '../../assets/img/search.svg';
import closeLogo from '../../assets/img/close.svg';
import { SearchContext } from '../../App';

export const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue('');
    updateSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={style.root}>
      <img className={style.search} src={searchLogo} alt="searchLogo" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img onClick={onClickClear} className={style.close} src={closeLogo} alt="closeLogo" />
      )}
    </div>
  );
};
