import { useContext } from "react";
import { ContextWine } from "../../contexts/Context";
import Stepan from "../../images/other/Stepan.jpg";
import Instagram from "../../images/other/socialMedia/instagram.jpg"
import "./cart.css"
import { FaRegTrashCan } from "react-icons/fa6";

function Cart() {
  const { state, dispatch } = useContext(ContextWine);
  console.log(state.cart);

  return (
    <div className="cart">
      <div className="cart-container">
        {state.cart.length > 0 && state.isSignUp  ? (
          state.cart.map((obj, i) => (
            <div key={i} className="cart-div">
              {" "}
              <img src={obj.src} alt="wine's img" />
              <div className="par-cart">
                <span>{obj.name}</span>
                <span>
                  {obj.orQu} x {obj.price}
                </span>
              </div>
              <button
                className="delete-btn"
                onClick={() => dispatch({ type: "delete", payload: obj.id })}
              >
                <FaRegTrashCan />
              </button>
              {/* <p>Total: {state.cart.reduce((acc, obj)=> acc + (Number(obj.orQu)*Number(obj.price)), 0)}</p> */}
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <p>Your cart still empty. Why?</p>
            <img src={Stepan} className="empty-cart-img"/>
            <div className="stepan">
             
              <img src={Instagram} className="insta-stepan"/>
              <p>@loveyoustepan</p>
              </div>
           
          </div>
        )}
        {state.cart.length > 0 &&  state.isSignUp && (
          <p>
            Total:{" "}
            {state.cart.reduce(
              (acc, obj) => acc + Number(obj.orQu) * parseFloat(obj.price),
              0
            )} €
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
