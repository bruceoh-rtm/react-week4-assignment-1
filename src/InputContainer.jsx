import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  addTask,
  updateTaskTitle,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
  };
}

export default function InputContainer() {
  const { taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle({ taskTitle: event.target.value }));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
