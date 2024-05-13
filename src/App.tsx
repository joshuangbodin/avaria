//imports from page Components
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import MakeReservation from "./pages/MakeReservation";


//imports from router
import { Route, Routes } from "react-router-dom";

//Navbar Import 
import NavBar from "./components/NavBar";
import Explore from "./pages/explore";



function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/rooms" element={<Rooms/>}></Route>
      <Route path="/reservations" element={<MakeReservation/>}></Route>
      <Route path="/explore" element={<Explore/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
