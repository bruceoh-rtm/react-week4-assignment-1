import { useDispatch, useSelector } from 'react-redux';

import List from '../presentational/List';
import { deleteTask } from '../redux/actions';

export default function ListContainer() {
  const { tasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <List
      tasks={tasks}
      onClickDelete={handleClickDeleteTask}
    />
  );
}
