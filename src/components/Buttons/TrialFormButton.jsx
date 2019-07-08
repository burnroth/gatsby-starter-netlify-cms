import React, { Component } from "react";
import TrialModal from "../Modals/TrialModal";
import lang from "../../../assets/translations/lang.json";

class TrialFormButton extends Component {
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
    this.setState(prevState =>({
      isClicked: !prevState.isClicked
    }))
  }

  hideForm() {
    this.setState({
      formIsSubmitted: true
    });
  }

  render() {
    const id = this.props.id || "trialButton";
    const buttonText = this.props.buttonText || lang.buttons.freeTrial;
    const buttonColor = this.props.buttonColor || "btn-turq";
    const wrapperClass = this.props.wrapperClass;
    const buttonClass = this.props.buttonClass;

    return (
      <div className={wrapperClass} style={{ display: "flex" }}>
        <button
          onClick={this.handleClick}
          id={id}
          className={`btn ${buttonClass} ${buttonColor}`}
        >
          {buttonText}
        </button>
        {this.state.isClicked ? (
          <TrialModal
            submitted={this.state.formIsSubmitted}
            handleClick={this.handleClick}
          />
        ) : null}
      </div>
    );
  }
}

export default TrialFormButton;
