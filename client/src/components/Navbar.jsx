import React, { useState } from 'react';
import './navbar.css';
import  cartts from '../assets/cart.jpg'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import sidePanelPic from '../assets/food-menu1.jpg'
import sidePanelPic2 from '../assets/food-menu4.jpg'
import {Link} from 'react-router-dom'
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const OpenPanel = () =>{
  setIsOpen(true);
}
const [count, setcount] = useState(0)
const [count2, setcount2] = useState(0)
const handleClose = () =>{
  setIsOpen(false)
}

const HandleCountSubtract = () =>{
  if(count == 0){
    return
  }
  else{
    setcount(count-1);
  }
}

const HandleCountAdd = () =>{
  setcount(count+1);
}
const HandleCountSubtract2 = () =>{
  if(count2 == 0){
    return
  }
  else{
    setcount2(count2-1);
  }
}

const HandleCountAdd2 = () =>{
  setcount2(count2+1);
}
  return (
    <>

    <header className='navbar'>
    <div className='navbar__title navbar__item'>logo</div>
    <div className='navbar__item'><img src={cartts} width={40} className='cartLogoHeader' onClick={OpenPanel}/></div>

    <Link to='/Signin'><div className='navbar__item' >Logout</div></Link>
</header>

<div className={`side-panel-container ${isOpen ? 'open' : ''}`}>
<div className='SidePanelShoppingList'>
<h2>Shopping Cart</h2>
 <div onClick={handleClose} className='CloseIconShoppingCart'>{<AiOutlineDoubleLeft/>}</div>

</div>
<div className='MainDivOfSidePanel'>
<div className='ListOfItemsUserBuy'>
<img src={sidePanelPic} width={150} height={100} className='itemPictureOfSidePanel'/>
<div className='quantity'>
  <p onClick={HandleCountSubtract} className='SubtractOrAdd'>-</p>
  <p>{count}</p>
<p onClick={HandleCountAdd} className='SubtractOrAdd'>+</p>
</div>
</div>
<br />
<div className='ListOfItemsUserBuy'>
<img src={sidePanelPic2} width={150} height={100} className='itemPictureOfSidePanel'/>
<div className='quantity'>
  <p onClick={HandleCountSubtract2} className='SubtractOrAdd'>-</p>
  <p>{count2}</p>
<p onClick={HandleCountAdd2} className='SubtractOrAdd'>+</p>
</div>
</div>
</div>

<Link to='/payment'><button className='btnCheckOut'>Check Out</button></Link>
</div>
</>

  )
}

export default Navbar;
