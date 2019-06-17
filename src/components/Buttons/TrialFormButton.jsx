import React, { Component } from "react";
import TrialModal from "../Modals/TrialModal";
import { lang } from "../../../assets/translations/lang";

class TrialFormButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }
  closeModal() {
    this.setState({
      isClicked: false
    });
  }
  render() {
    const buttonColor = this.props.buttonColor
      ? this.props.buttonColor
      : "btn-turq";
    const buttonClass = this.props.buttonClass;
    const id = this.props.id ? this.props.id : "demoButtonMaggan";
    const buttonText = this.props.buttonText ? this.props.buttonText : lang.buttons.freeTrial;

    return (
      <div style={{ display: "flex" }}>
        <button
          onClick={this.handleClick}
          id={id}
          className={`btn ${buttonClass} ${buttonColor}`}
        >
          {buttonText}
        </button>
        {this.state.isClicked ? (
          <TrialModal closeModal={this.closeModal} />
        ) : null}
      </div>
    );
  }
}

export default TrialFormButton;
