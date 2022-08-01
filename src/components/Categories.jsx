import React from 'react';
import Proptypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}:${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: Proptypes.oneOf([Proptypes.number, null]),
  items: Proptypes.arrayOf(Proptypes.string).isRequired,
  onClickCategory: Proptypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
