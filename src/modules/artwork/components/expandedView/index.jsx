import "./styles.css";

const ExpandedView = ({ label, image, visible, close }) => {

  return (
    <>
      {visible && (
        <div className='artwork-large-container' onClick={close}>
          <img className='artwork-large-image' alt={label} src={image}></img>
        </div>
      )}
    </>
  );
};

export default ExpandedView;
