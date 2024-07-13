import TodoContainer from '@/components/todo/todo-container';
import { useState } from 'react';
import PopupScreenForAddTask from '@/components/popup/popup';
import DropDownList from '@/components/input-field/drop-down';

const todoItems = [
  { id: 1, title: 'i love react', createdAt: '2023-11-20', finished: false },
  { id: 2, title: 'i love next', createdAt: '2023-11-20', finished: false },
  { id: 3, title: 'i love nest', createdAt: '2023-11-20', finished: false },
  { id: 4, title: 'i love postgres', createdAt: '2023-11-20', finished: false },
];

const dropDownItems = [{ value: 'completed', option: 'finished' }];

export default function Index() {
  const [items, setItems] = useState(todoItems);
  const [filter, setFilter] = useState('none');

  console.log('items : ', items);
  return (
    <div style={{ justifyContent: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center' , minHeight: '100vh'  }}>
      <h1>TODO LIST</h1>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center' , gap:'430px' , paddingBottom: '12px'} }>
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



      <div style={{backgroundColor : '#f1f3f5', borderRadius: '10px' , borderColor: 'white' , width:'40%'}} >
        <TodoContainer items={items} setItems={setItems} filter={filter} />
      </div>
    </div>
  );
}
