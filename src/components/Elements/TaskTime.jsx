const TaskTextTime = ({time, text}) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium text-red-500">{time}
        <span className="text-sm text-gray-500 mx-0.5">m</span>
      </h3>
      <p className="text-sm text-gray-500">{text}</p>
  </div>
  )
}

export default TaskTextTime;