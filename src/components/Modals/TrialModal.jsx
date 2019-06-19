import React, { Component } from "react";
import TrialForm from "../TrialForm/TrialForm";
import { lang } from "../../../assets/translations/lang";

const modal = lang.trialModal;

class TrialModal extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (!this.node.contains(event.target)) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-backdrop" />
        <div
          ref={node => (this.node = node)}
          id="trialModal"
          className="lime-modal shadow"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 justify-content-center">
                <h1 style={{
                  color: "white"
                }}>
                  <strong>{modal.heading}</strong>
                </h1>
                <p style={{
                  color: "white"
                }}>
                  {modal.description}
                </p>
                <TrialForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrialModal;
