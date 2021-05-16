import Backdrop from "./Backdrop";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal"
        style={{
          visibility: props.show ? "visible" : "hidden",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
