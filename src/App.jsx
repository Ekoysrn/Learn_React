import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Image from "./components/Elements/Image"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import Product from './pages/Products';
import Home from './components/layouts/Home';
import TodayTask from "./pages/TodayPage";
import TomorrowTask from './pages/TomorowPage';
import ThisWeekTask from "./pages/ThisWeekPage";
import PlannedTask from "./pages/PlannedPage";
import CompletedTask from "./pages/CompletedPage";
import Task from "./pages/Tasks";


const router = createBrowserRouter([
  {
  errorElement: <NotFoundPage />,
  children:[
    {
      path: "/",
      element: <TodayTask />
    },
    {
      path: "/Today",
      element: <TodayTask />,
    },
    {
      path: "/Tomorrow",
      element: <TomorrowTask />,
    },
    {
      path: "/This Week",
      element: <ThisWeekTask />,
    },
    {
      path: "/Planned",
      element: <PlannedTask />,
    },
    {
      path: "/Completed",
      element: <CompletedTask />,
    },
    {
      path: "/Tasks",
      element: <Task />,
    },
    {
      path: "/products",
      element: <Product />
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ],
  }
],);

function App() {
  return (
    //bg-[#F7F7FA]
    <div className="bg-slate-950 h-screen overflow-hidden box-border">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
