import TodoItem from '@/components/todo/todo-item';
import { FilterOption } from '@/enum/filter-option';

function filterDataBasedOnOption(items, filter) {
  let filteredItems;
  switch (filter) {
    case FilterOption.FINISHED:
      filteredItems = items.filter((item) => item.finished === true);
      break;
    case FilterOption.NONE:
      filteredItems = items;
      break;
    default:
      filteredItems = items;
      break;
  }
  return filteredItems;
}

const TodoContainer = ({ items, filter }) => {
  const filteredItems = filterDataBasedOnOption(items, filter);
  return (
    <div>
      {filteredItems &&
        filteredItems.map((item, index) => (
          <div
            key={`todo-item-${index}`}
            style={{ borderRadius: '12px', borderColor: 'black' }}
          >
            <TodoItem item={item} />
          </div>
        ))}
    </div>
  );
};

export default TodoContainer;
