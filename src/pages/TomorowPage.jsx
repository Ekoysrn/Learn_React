import HeaderMainHome from "../components/Elements/HeaderMain"
import MainHome from "../components/Fragments/MainHome"
import Home from "../components/layouts/Home"


const TomorrowTask = () => {
  return (
    <Home children={<MainHome children={<HeaderMainHome title="Tommorow" />} />}/>
  )
}


export default TomorrowTask