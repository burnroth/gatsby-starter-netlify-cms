import React, { Component } from "react";
import DemoModal from "../Modals/DemoModal";
import lang from "../../../assets/translations/lang.json";

class DemoFormButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      formIsSubmitted: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    document.addEventListener("submit", this.hideForm);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  hideForm() {
    this.setState({
      formIsSubmitted: true
    });
  }

  render() {
    const buttonColor = this.props.buttonColor
      ? this.props.buttonColor
      : "btn-white-ghost";
    const buttonClass = this.props.buttonClass;
    const id = this.props.id ? this.props.id : "demoButton";
    const buttonText = lang.buttons.freeDemo;

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
          <DemoModal
            submitted={this.state.formIsSubmitted}
            handleClick={this.handleClick}
          />
        ) : null}
      </div>
    );
  }
}

export default DemoFormButton;
