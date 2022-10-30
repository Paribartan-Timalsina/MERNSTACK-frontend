import {React,useEffect,useState} from 'react'
import {Row,Col,Button,Container,ButtonGroup} from "react-bootstrap"

import {Routes,Route,useNavigate} from "react-router-dom"
import Products from './Adminfolder/Products.jsx'
import AddProduct from './Adminfolder/AddProduct.jsx'
 
import AllOrders from './Adminfolder/AllOrders.jsx'
import Users from './Adminfolder/Users.jsx'
 
const Admin = () => {
  const [users,setUsers]=useState()
    // const userState=useSelector(state=>state.loginUserReducer)
    // const [currentUser]=userState
    const navigate=useNavigate()
  const calladminData = async ()=>{
   const response= await fetch('/about',
      {
        method: "GET",

        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
         credentials:"include",
      })
    const actualData= await response.json()
    console.log(actualData)
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
      <Button  onClick={(e)=>navigate("/admin/productlist")}>All  </Button>

      

      <Button  onClick={(e)=>navigate("/admin/addproduct")}>Add New Items</Button>
      <Button  onClick={(e)=>navigate("/admin/orderlist")}>All Orders</Button>

      
    </ButtonGroup>


        </Col>
        <Col md={8} >
          <div>
            <Routes>
                <Route exact path="/admin/userlist" element={<Users/>} />
                <Route exact path="/admin/productlist" element={<Products/>} />
                <Route exact path="/admin/orderlist" element={<AllOrders/>} />
                <Route exact path="/admin/addproduct" element={<AddProduct/>} />
            </Routes>
            </div>
        </Col>
      </Row> 
      </Container>
    </>
  )
}

export default Admin
