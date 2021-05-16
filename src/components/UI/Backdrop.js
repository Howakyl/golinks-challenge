import './Backdrop.css';

const Backdrop = (props) => {
  return (
    props.show ? <div className='backdrop'></div> : null
  )
}

export default Backdrop;