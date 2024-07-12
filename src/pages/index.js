import TodoContainer from '@/components/todo/todo-container';
import {useState} from 'react';
import PopupScreenForAddTask from '@/components/popup/popup';
import DropDownList from '@/components/input-field/drop-down';

const todoItems = [
  {id : 1 , title: 'i love react'    , createdAt: '2023-11-20' , 'finished'  : false},
  {id : 2 , title: 'i love next'     , createdAt: '2023-11-20' , 'finished'  : false},
  {id : 3 , title: 'i love nest'     , createdAt: '2023-11-20' , 'finished'  : false},
  {id : 4 , title: 'i love postgres' , createdAt: '2023-11-20' , 'finished'  : false},
]


const dropDownItems = [
  {value : 'completed' , option: 'finished'},
]

export default function Index() {
  const [items , setItems] = useState(todoItems) ;
  const [filter, setFilter] = useState('none');

  console.log('items : ' , items) ;
  return (
    <>
      <div>
         <DropDownList dropDownItems={dropDownItems} placeholder={'filter'} filter={filter} setFilter={setFilter} />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <PopupScreenForAddTask placeholder={'Add Task'} items={items} setItems={setItems}></PopupScreenForAddTask>
      </div>

      <br></br>
      <br></br>

      <div>
        <TodoContainer items={items} setItems={setItems} filter={filter}/>
      </div>   
      </>
  );
}
