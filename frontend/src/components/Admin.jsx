import {React,useEffect,useState} from 'react'
import {Row,Col,Button,Container,ButtonGroup} from "react-bootstrap"

import {Routes,Route,useNavigate} from "react-router-dom"
import Products from './Adminfolder/Products.jsx'
import AddProduct from './Adminfolder/AddProduct.jsx'
 import axios from "axios"
import AllOrders from './Adminfolder/AllOrders.jsx'
import Users from './Adminfolder/Users.jsx'
 
const Admin = () => {
  const [users,setUsers]=useState()
    // const userState=useSelector(state=>state.loginUserReducer)
    // const [currentUser]=userState
    const navigate=useNavigate()
  const calladminData = async ()=>{
    axios.get('/about',
      {
        method: "GET",

        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
         credentials:"include",
      }).then((response)=>{console.log(response.data)
        
      if(response.data.name!=="Sergio Aguero"||response.status==401){
        navigate("/itemlist")
      }
      })
      
   
    }

  useEffect(() => {
    calladminData()
  // console.log(users)
  //   if(users.name!=="Sergio Aguero"){
  //           navigate("/itemlist")
  //          }
           
  //    fetch('/about/',
  //     {
  //       method: "GET",

  //       headers:{
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       credentials:"include"
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((actualdata) => setUsers(actualdata))
      
        
  //     console.log(users.name)   
  //        if(users.name!="Sergio Aguero"){
  //       navigate("/itemlist")
  //     }
   }, 
  
 [] );
 
    
    
  return (
  
    <>
    <Container>
      <Row>
        
        <Col md={2}>
      
    <ButtonGroup vertical style={{minHeight:"400px"}}>
      <Button onClick={(e)=>navigate("/admin/userlist")}> All Users</Button>
      <Button  onClick={(e)=>navigate("/admin/productlist")}>All Products  </Button>

      

      <Button  onClick={(e)=>navigate("/admin/addproduct")}>Add New Items</Button>
      <Button  onClick={(e)=>navigate("/admin/orderlist")}>All Orders</Button>

      
    </ButtonGroup>


        </Col>
        <Col md={8} >
          <div>
            <Routes>
                <Route exact path="/userlist" element={<Users/>} />
                <Route exact path="/productlist" element={<Products/>} />
                <Route exact path="/orderlist" element={<AllOrders/>} />
                <Route exact path="/addproduct" element={<AddProduct/>} />
            </Routes>
            </div>
        </Col>
      </Row> 
      </Container>
    </>
  )
}

export default Admin
