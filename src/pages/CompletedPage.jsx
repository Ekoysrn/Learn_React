import HeaderMainHome from "../components/Elements/HeaderMain"
import MainHome from "../components/Fragments/MainHome"
import Home from "../components/layouts/Home"


const CompletedTask = () => {
  return (
    <Home children={<MainHome children={<HeaderMainHome title="Completed" />} />}/>
  )
}


export default CompletedTask