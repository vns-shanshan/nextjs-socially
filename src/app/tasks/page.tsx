const TasksPage = async () => {
  const response = await fetch("/api/tasks", {
    cache: "no-store",
  });

  const tasks = await response.json();

  console.log(tasks);

  return <div>TasksPage</div>;
};

export default TasksPage;
