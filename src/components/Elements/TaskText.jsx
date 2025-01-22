const TaskText = ({task, text}) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium text-red-500">{task}</h3>
      <p className="text-sm text-gray-500">
        {text}
      </p>
    </div>
  )
}

export default TaskText;
