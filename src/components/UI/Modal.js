import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.close} />
      <div
        className={classes.modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          visibility: props.show ? "initial" : "hidden",
        }}
      >
        <i className={`fas fa-times ${classes.exit}`} onClick={props.close}></i>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
