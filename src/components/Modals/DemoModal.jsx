import React, { Component } from "react";
import TrialForm from "../TrialForm/TrialForm";
import lang from "../../../assets/translations/lang.json";

class DemoModal extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.escapeModal = this.escapeModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("keydown", this.escapeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("keydown", this.escapeModal);
  }

  handleClickOutside(event) {
    if (!this.node.contains(event.target)) {
      this.props.handleClick();
    }
  }

  escapeModal(event) {
    if (event.keyCode === 27) {
      this.props.handleClick();
    }
  }

  render() {
    const modal = lang.demoModal;

    return (
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div
          ref={node => (this.node = node)}
          id="trialModal"
          className="lime-modal"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 justify-content-center">
                <h1
                  style={{
                    color: "white"
                  }}
                >
                  <strong>{modal.heading}</strong>
                </h1>
                <p
                  style={{
                    color: "white"
                  }}
                >
                  {modal.description}
                </p>
                {this.props.submitted ? <h1>Tack som fan</h1> : <TrialForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoModal;
