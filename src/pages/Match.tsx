import { Link } from "react-router-dom"
import Card from "../components/Card"


const Match = () => {
  return (
    <Link to="/playagain">
      <Card /> 
      <Card /> 
      <Card />
    </Link>
  )
}

export default Match