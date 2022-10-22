import {React,useEffect,useState} from 'react'
import {Row,Col,Button,Container,ButtonGroup} from "react-bootstrap"

import {Routes,Route,useNavigate} from "react-router-dom"
import Products from './Adminfolder/Products'
import AddProduct from './Adminfolder/AddProduct'
 
import AllOrders from './Adminfolder/AllOrders'
import Users from './Adminfolder/Users'
 
const Admin = () => {
  const [users,setUsers]=useState("")
    // const userState=useSelector(state=>state.loginUserReducer)
    // const [currentUser]=userState
    const navigate=useNavigate()
  
  useEffect(() => {
     fetch('/about/',
      {
        method: "GET",

        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }
    )
      .then((response) => response.json())
      .then((actualdata) => setUsers(actualdata)
      )
        
      console.log(users)
      if(!users.name==="Sergio Aguero"){
        navigate("/itemlist")
      }
  }, 
  
 [] );
 
    
    
  return (
    <>
    <Container>
      <Row>
        <h1>Admin Panel</h1>
        <Col md={4}>
      
    <ButtonGroup vertical>
      <Button onClick={()=>navigate("/admin/userlist")}> All Users</Button>
      <Button  onClick={()=>navigate("/admin/productlist")}>All  </Button>

      

      <Button  onClick={()=>navigate("/admin/addproduct")}>Add New Items</Button>
      <Button  onClick={()=>navigate("/admin/orderlist")}>All Orders</Button>

      
    </ButtonGroup>


        </Col>
        <Col md={8}>
            <Routes>
                <Route  path="/admin/userlist" component={<Users/>} exact/>
                <Route  path="/admin/productlist" component={<Products/>} exact/>
                <Route  path="/admin/orderlist" component={<AllOrders/>} exact/>
                <Route  path="/admin/addproduct" component={<AddProduct/>} exact/>
            </Routes>
        </Col>
      </Row> 
      </Container>
    </>
  )
}

export default Admin
