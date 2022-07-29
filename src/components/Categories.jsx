import React from 'react';

// class Categories extends React.Component {
//   state = {
//     onItemActive: null,
//   };
//   onSelect = (index) => {
//     this.setState({
//       onItemActive: index,
//     });
//   };
//   render() {
//     const { items, onItemClick } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.onItemActive === index ? 'active' : ''}
//               onClick={() => this.onSelected(index)}
//               key={`${name}:${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}:${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
