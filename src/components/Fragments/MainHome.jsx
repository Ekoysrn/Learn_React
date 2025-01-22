import TaskTextTime from "../Elements/TaskTime";
import TaskText from "../Elements/TaskText";

const MainHome = ({ children }) => {
  return (
    <main className="flex-1 p-8">
      {children}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between">
          <TaskTextTime time="15" text="Estimated Time" />
          <TaskText task="3" text="Tasks to be Completed" />
          <TaskTextTime time="25" text="Time Passes" />
          <TaskText task="2" text="Tasks Completed" />
        </div>
      </div>
      <div className="mt-8 text-center bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-500">Tidak ada tugas</p>
        <button className="mt-4 text-blue-500 hover:underline">
          Tambahkan tugas
        </button>
      </div>
    </main>
  );
};

export default MainHome;
