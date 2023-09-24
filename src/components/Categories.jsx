import React from 'react';

export const Categories = ({ categories, onClickCategory }) => {
  const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categories === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
