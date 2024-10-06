//import wines from "../../images/other/wines.jpeg"
import { useContext } from "react"
import { ContextWine } from "../../contexts/Context"
import { IoCartOutline } from "react-icons/io5";
import BestSellerSlider from '../bestsellerSlider/BestsellerSlider'
import "./home.css"

function Home() {
  const {state, user} = useContext(ContextWine)
  return (
  
    <div className="home">
       {state.isSignUp && <div>Hello, {user.firstName}! {state.cart.length>0 ? <div>You have {state.cart.reduce((acc, wine) => {
  return acc + wine.orQu;
}, 0)} items in your cart </div> : <div className="empty">Your cart is empty<div>
  <IoCartOutline /> {state.cart.reduce((acc, wine) => {
  return acc + wine.orQu;
}, 0)}
  </div></div>}
  </div>}
      {/* <img src={wines} alt="" /> */}
      <div className="bestsellers">
          <div>
            <p>Do not forget to try <br/> our bestsellers</p>
          </div>
          <div className="bestsellerContainer">
            <BestSellerSlider/>

          </div>
      </div>
    </div>
    
  )
}

export default Home
