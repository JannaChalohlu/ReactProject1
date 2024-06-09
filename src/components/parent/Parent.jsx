import { NavLink, Outlet } from "react-router-dom"
import { useContext, useState } from "react"
import { ContextWine } from "../../contexts/Context"
import Profile from "../profile/Profile"
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";




function Parent() {
  const {state}= useContext(ContextWine)
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  
 return (
    <div className="content">
    <div className="navBar">
    
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/red">Red</NavLink>
        </li>
        <li>
            <NavLink to="/white">White</NavLink>
        </li>
        <li>
            <NavLink to="/rose">Rose</NavLink>
        </li>
        <li>
            <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li >
            <NavLink to="/cart" className="cart-value"><p>Cart  </p> {state.isSignUp && <div>
              <IoCartOutline /> {state.cart.reduce((acc, wine) => {
  return acc + wine.orQu;
}, 0)}
              </div>}
              </NavLink>
        </li>
        <li>
          {state.isSignUp ? <NavLink to="/profile" element={<Profile/>}>Profile</NavLink> : <NavLink to="/signUp">Sign Up</NavLink>}
            
        </li>
      </ul>
    </div>
    <div className="hamburger">
    <div  onClick={handleOpen}>{isOpen ? <MdClose /> : <FiMenu /> }</div>

    </div>
    {isOpen &&  <ul className="navbar-mobile">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/red">Red</NavLink>
        </li>
        <li>
            <NavLink to="/white">White</NavLink>
        </li>
        <li>
            <NavLink to="/rose">Rose</NavLink>
        </li>
        <li>
            <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li >
            <NavLink to="/cart" className="cart-value"><p>Cart  </p> {state.isSignUp && <div>
              <IoCartOutline /> {state.cart.length}
              </div>}
              </NavLink>
        </li>
        <li>
          {state.isSignUp ? <NavLink to="/profile" element={<Profile/>}>Profile</NavLink> : <NavLink to="/signUp">Sign Up</NavLink>}
            
        </li>
      </ul>}
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default Parent


