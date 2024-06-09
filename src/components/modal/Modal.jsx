import { useContext } from "react";
import { ContextWine } from "../../contexts/Context";
import "./modal.css"

function Modal() {
  const { error, setError } = useContext(ContextWine);
  const closeModal = () => setError({ open: false, content: "" });
  return (
    // <Popup open={error.open} closeOnDocumentClick onClose={closeModal}>
    //   </Popup>
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-content">
          {error.content}
          <button className="close" onClick={closeModal}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
