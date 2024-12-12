import Navbar from "../components/Navbar"
import CategoryBar from "../components/CategoryBar"
import Movies from "./Movies"

const Homepage = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="container mx-auto bg-blue-600">
        <CategoryBar />
      </div>
      <Movies />
    </div>
  )
}

export default Homepage 