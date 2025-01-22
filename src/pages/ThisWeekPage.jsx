import HeaderMainHome from "../components/Elements/HeaderMain"
import MainHome from "../components/Fragments/MainHome"
import Home from "../components/layouts/Home"


const ThisWeekTask = () => {
  return (
    <Home children={<MainHome children={<HeaderMainHome title="This Week" />} />}/>
  )
}


export default ThisWeekTask