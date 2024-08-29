import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { Navigate, useNavigate } from 'react-router-dom';


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
 const dispatch = useDispatch()
 //hook used to navigate a particular path or page
 const navigate = useNavigate()
 
 const [total,setTotal]=useState(0)
 const getTotal =()=>{
  let sum=0;
  cartArray.forEach((item)=>{
    sum = sum +item.price
  })
  setTotal(sum)
 }
 useEffect(()=>{
  getTotal();
 },[cartArray])
 const handleCart =()=>{
  alert("thank you .. your oder placesd");
  dispatch(emptyCart());
  navigate('/')
  
 }
  
  
  return (
   <>
   <div style={{marginTop:'100px'}}>
   
     {
      cartArray?.length>0?
      <div className='row w-100'>
      <div className='col-lg-6 m-5'>
      <table className='table shadow border'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          cartArray?.map((item,index)=>(
            
          <tr>
          <td>{index+1}</td>
          <td>{item.title.slice(0,20)}...</td>
          <td><img src={item.image} alt="" height="75px" width="75px" /></td>
          <td>₹{item.price}</td>
          <td><Button variant="outline-danger"
          onClick={()=>dispatch(removeFromCart(item.id))}
          ><i class="fa-solid fa-trash"></i></Button></td>
        </tr>

          ))
         }

        </tbody>
      </table>
    </div> 
    <div className='col-lg-4'>
      <div className='border shadow p-5'>
        <h4 className='text-primary'>Cart Summary</h4>
        <h5>Total Number of Products: <span className='text-warning fw-bolder'>{cartArray?.length}</span> </h5>
        <h5>Total Price: <span className='text-warning fw-bolder'>₹ {total}</span></h5>
        <button className='btn btn-success rounded w-100'onClick={handleCart} >CHECKOUT</button>
      </div>
    </div>
    
    
    </div>
    :
    <div style={{height:'100vh'}} className='d-flex  align-items-center flex-column'>
    <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?w=826&t=st=1724743509~exp=1724744109~hmac=d3d95ab5dad215662a000fb8f59fb59e8d21603a93bf20dcd5a28a4e90ff64d5" 
     height='350px'   alt="" 
    
    />
    <h3 className='text-danger fw-bolder'>Your cart is Empty</h3>
   </div>

     }

    
     

     </div>
  
   </>
  )
}

export default Cart