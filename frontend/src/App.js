import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtasks from "./components/Addtasks";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Daata from "./components/Daata";
import Tabs from "./components/Tabs";
import Stripe from "./components/Stripe";
import Cartitems from "./components/Cartitems";
import Googlelogin from "./components/Googlelogin";
import Admin from "./components/Admin";
import Logout from "./components/Logout";
import Productdetail from "./components/Productdetail";


const App = () => {
  
  const [tasks, settasks] = useState([
    ""
  ])
  
  // useEffect(() => {
  //   const response = fetch('http://localhost:5000/things/',
  //     {
  //       method: "GET",

  //       // headers:{
  //       //   Accept:"multipart/form-data",
  //       //   "Content-Type":"multipart/form-data"
  //       // },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((actualdata) => setPosts(actualdata))

  // }, []);
  const Deletetask = (id) => {
    settasks(tasks.filter((task) => (
      task.id !== id
    )))
  }
  const addtaskdiv = (task) => {
    const newinfo = { ...task }
    settasks([...tasks, newinfo])

  }

  return (
    <div className="container">


      <Routes>
        <Route exact path="/" element={<Home />} />
        < Route exact path="/register" element={<>
          < Addtasks />
          {/* <Tasks tasks={tasks} onDelete={Deletetask} /> */}
        </>} />
        <Route exact path="/show" element={<Tasks tasks={tasks} onDelete={Deletetask} />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route  path="/admin/*" element={<Admin />} />
        <Route  path="/product/:_id" element={<Productdetail />} />
        <Route exact path="/display" element={<Daata  />} />
        <Route exact path="/itemlist" element={<Tabs/>}/>
        <Route exact path="/cartitemlist" element={<Cartitems />}/>
        <Route exact path="/googlelogin" element={<Googlelogin/>}/>
        <Route exact path="/stripe" element={<Stripe/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
      </Routes>
    </div>



  );
}

export default App;
