import HeaderMainHome from "../components/Elements/HeaderMain"
import MainHome from "../components/Fragments/MainHome"
import Home from "../components/layouts/Home"


const TodayTask = () => {
  return (
    <Home children={<MainHome children={<HeaderMainHome title="Today" />} />}/>
  )
}


export default TodayTask
