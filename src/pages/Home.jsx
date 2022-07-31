import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup } from '../components/';
import PizzaBlock from './PizzaBlock';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
