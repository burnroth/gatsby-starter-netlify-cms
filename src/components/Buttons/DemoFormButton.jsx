import React, { Component } from "react";
import DemoModal from "../Modals/DemoModal";
import { lang } from "../../../assets/translations/lang";

class DemoFormButton extends Component {
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
      : "btn-white-ghost";
    const buttonClass = this.props.buttonClass;
    const id = this.props.id ? this.props.id : "demoButtonMaggan";
    const buttonText = lang.buttons.freeDemo;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={this.handleClick}
          id={id}
          className={`btn ${buttonClass} ${buttonColor}`}
        >
          {buttonText}
        </button>
        {this.state.isClicked ? (
          <DemoModal closeModal={this.closeModal} />
        ) : null}
      </div>
    );
  }
}

export default DemoFormButton;
