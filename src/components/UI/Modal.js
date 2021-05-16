import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className="modal"
      style={{
        visibility: props.show ? 'visible' : 'hidden'
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
