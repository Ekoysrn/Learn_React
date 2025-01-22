import HeaderMainHome from "../components/Elements/HeaderMain"
import MainHome from "../components/Fragments/MainHome"
import Home from "../components/layouts/Home"


const PlannedTask = () => {
  return (
    <Home children={<MainHome children={<HeaderMainHome title="Planned" />} />}/>
  )
}


export default PlannedTask