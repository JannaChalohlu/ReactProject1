import { useContext } from "react";
import { ContextWine } from "../../contexts/Context";
import "./red.css";

function Red() {
  const { state, dispatch } = useContext(ContextWine);

  return (
    <div className="wine-container">
      {state.redWine.map((obj) => {
        return (
          <div key={obj.id} className="div-img">
            <img src={obj.src} alt="wine's img" />
            <button onClick={() => dispatch({ type: "add", payload: obj })}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Red;
