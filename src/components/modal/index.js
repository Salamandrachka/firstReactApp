import React from "react";
import "./modal.scss";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
            <div className='modalHeader__wrapper'>
            <h2 className="modalHeader">{this.props.header}</h2>
            <div className='closePointer' onClick={(e) => {
            this.props.onClose()
            }}>X</div>
            </div>
            
            <p className='modalText'>{this.props.text}</p>
        <div className="content">{this.props.children}</div>
            <div className="actions">

            <button className="close-button" onClick={this.onClose}>
            Ok
            </button>
        
          <button className="close-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};