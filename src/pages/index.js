import TodoContainer from '@/components/todo/todo-container';
import { useState, useContext, useEffect } from 'react';
import PopupScreenForAddTask from '@/components/popup/popup';
import DropDownList from '@/components/input-field/drop-down';
import ItemContext, { ItemProvider } from '@/contexts/todo-context';
import TodoContext from '@/contexts/todo-context';

export const todoItems = [
  { id: 1, title: 'i love react', createdAt: '2023-11-20', finished: false },
  { id: 2, title: 'i love next', createdAt: '2023-11-20', finished: false },
  { id: 3, title: 'i love nest', createdAt: '2023-11-20', finished: false },
  { id: 4, title: 'i love postgres', createdAt: '2023-11-20', finished: false },
];

const dropDownItems = [{ value: 'completed', option: 'finished' }];

const Home = () => {
  const { items, setItems } = useContext(TodoContext);
  const [filter, setFilter] = useState('none');

  console.log(items);

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h1>TODO LIST</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '430px',
          paddingBottom: '12px',
        }}
      >
        <PopupScreenForAddTask
          placeholder={'Add Task'}
          items={items}
          setItems={setItems}
        ></PopupScreenForAddTask>

        <DropDownList
          dropDownItems={dropDownItems}
          placeholder={'filter'}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div
        style={{
          backgroundColor: '#f1f3f5',
          borderRadius: '10px',
          borderColor: 'white',
          width: '40%',
        }}
      >
        <TodoContainer items={items} filter={filter} />
      </div>
    </div>
  );
};

export default function index() {
  return (
    <ItemProvider>
      <Home />
    </ItemProvider>
  );
}
