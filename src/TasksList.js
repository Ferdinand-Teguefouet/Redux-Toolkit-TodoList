import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const tasks = useSelector(
    (state) =>
      //console.log(state) -- continet un objet qui représente l'état de notre todoSlice
      state.todo
  );
  console.log(tasks);
  return (
    <>
      {tasks.length !== 0 ? (
        tasks.map((t) => <TaskItem task={t} key={t.id} />)
      ) : (
        <p>Pas de tâches pour l'instant!"</p>
      )}
    </>
  );
};

export default TasksList;
