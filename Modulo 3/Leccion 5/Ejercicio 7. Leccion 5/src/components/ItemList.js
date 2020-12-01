import React from 'react';
import CategoryButton from './CategoryButton';
import Item from './Item';
const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    name: 'Bebida de soja',
    quantity: 1,
    category: 'Bebida',
    price: 8,
  },
  {
    name: 'Barra de chocolate',
    quantity: 1,
    category: 'Fast-food',
    price: 2,
  },
];

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArray() {
    const arrayrender =
  }
  render() {
    return (
      <>
        <ul></ul>
        <CategoryButton category='Bebida' />
        <CategoryButton category='Cereales' />
        <CategoryButton category='Fast-food' />
        <CategoryButton category='Todas' />
      </>
    );
  }
}

export default ItemList;
