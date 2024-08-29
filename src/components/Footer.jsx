import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'300px'}}
     className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
      <div className='d-flex justify-content-evenly align-items-center mb-5 w-100'style={{color:'white'}} >
        <div style={{width:'400px',color:'white'}}>
            <h4>   <i style={{color:'white'}} class="fa-solid fa-cart-shopping  me-3 "></i>E-KART </h4>
            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, quae fuga tempore nam, expedita ab excepturi animi est earum officia in aut magni officiis, nisi repudiandae ad vitae labore deserunt.</h6>

        </div>
        <div className='d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:"none",color:'white'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:"none",color:'white'}} >Cart</Link>
          <Link to={'wishlist'} style={{textDecoration:"none",color:'white'}} >Wishlist</Link>
        </div>
        <div className='d-flex flex-column'>
        <h4>Guides</h4>
        <Link to={'https://react.dev/'} target='blank' style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://react.dev/'} target='blank' style={{textDecoration:'none',color:'white'}}>React Boostrap</Link>
        <Link to={'https://react.dev/'} target='blank' style={{textDecoration:'none',color:'white'}}>Boots watch</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter Email id' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-3'>
            <Link style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
        </div>
        <p style={{color:'white'}}>Copyright 	&#169; 2024 E-Kart build with React Redux</p>
        </div>
    </>
  )
}

export default Footer