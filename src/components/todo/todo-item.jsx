import TodoItemActions from "./todo-item-actions";
import TodoItemInformation from "./todo-item-information";

const TodoItem = ({ item, allItems, setItems  }) => {

    return (
        <div>
            <TodoItemInformation item={item} />
            <TodoItemActions 
                currentItem={item} 
                setAllItems={setItems} 
                allItems={allItems} 

            />
            {/* should put actions in the same row */} 
        </div>
    );
}


export default TodoItem;
