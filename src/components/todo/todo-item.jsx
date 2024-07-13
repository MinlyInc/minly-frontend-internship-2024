import TodoItemActions from './todo-item-actions';
import TodoItemInformation from './todo-item-information';
import { memo } from 'react';

function comparePrevPropWithNextProps(prevProps, nextProps) {
  return false;
  // return prevProps.item.title === nextProps.item.title && prevProps.item.id === nextProps.item.id;
}

const TodoItem = ({ item, allItems, setItems }) => {
  console.log('we are re-render this item', item);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '12px',
        border: '1px solid',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        margin: '20px',
      }}
    >
      <TodoItemInformation item={item} />
      <div style={{ flexGrow: 1 }}></div>
      <TodoItemActions
        currentItem={item}
        setAllItems={setItems}
        allItems={allItems}
      />
    </div>
  );
};

export default memo(TodoItem, comparePrevPropWithNextProps);
