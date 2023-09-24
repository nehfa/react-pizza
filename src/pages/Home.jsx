import React from 'react';
import axios from 'axios';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Pagination } from '../components/Pagination';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setPageCount } from '../redux/slices/filterSlice';

export const Home = () => {
  const categories = useSelector((state) => state.filter.categoryID);
  const sort = useSelector((state) => state.filter.sort);
  const pageCount = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();

  const onChangeCatergoy = (id) => {
    dispatch(setCategories(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  //https://64bd517e2320b36433c79aab.mockapi.io/items
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const caterogy = categories > 0 ? `category=${categories}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://64bd517e2320b36433c79aab.mockapi.io/items?page=${pageCount}&limit=4&${caterogy}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categories, sort, searchValue, pageCount]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} onClickCategory={onChangeCatergoy} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
};
