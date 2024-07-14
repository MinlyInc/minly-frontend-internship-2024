// src/context/ItemContext.js
import { createContext, useState, ReactNode } from 'react';
import { todoItems } from '@/pages';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(todoItems);

  const handleEditItem = (currentItem, titleFieldValue) => {
    let editedItem = {
      id: currentItem.id,
      title: titleFieldValue,
      finished: currentItem.finished,
      createdAt: currentItem.createdAt,
    };

    setItems([
      ...items.map((item) => (item.id === currentItem.id ? editedItem : item)),
    ]);
  };

  function handleDeleteItem(currentItem) {
    setItems(items.filter((item) => item.id !== currentItem.id));
  }

  return (
    <ItemContext.Provider
      value={{ items, setItems, handleEditItem, handleDeleteItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
