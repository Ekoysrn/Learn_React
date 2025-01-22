import HeaderMainHome from "../components/Elements/HeaderMain"
import MainHome from "../components/Fragments/MainHome"
import Home from "../components/layouts/Home"


const Task = () => {
  return (
    <Home children={<MainHome children={<HeaderMainHome title="Task" />} />}/>
  )
}


export default Task