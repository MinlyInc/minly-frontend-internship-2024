import TodoItem from '@/components/todo/todo-item';
import { FilterOption } from '@/enum/filter-option';

function filterDataBasedOnOption(items, filter) {
  let filteredItmes;
  switch (filter) {
    case FilterOption.FINISHED:
      filteredItmes = items.filter((item) => item.finished === true);
      break;
    case FilterOption.NONE:
      filteredItmes = items;
      break;
    default:
      filteredItmes = items;
      break;
  }
  return filteredItmes;
}

const TodoContainer = ({ items, setItems, filter }) => {
  const filteredItems = filterDataBasedOnOption(items, filter);
  return (
    <div>
      {filteredItems &&
        filteredItems.map((item, index) => (
          <div
            key={`todo-item-${index}`}
            style={{ borderRadius: '12px', borderColor: 'black' }}
          >
            <TodoItem
              item={item}
              setItems={setItems}
              allItems={items}
            ></TodoItem>
          </div>
        ))}
    </div>
  );
};

export default TodoContainer;
