import React, { Component } from "react";
import { connect } from "react-redux";
import LoanForm from "./LoanForm";
import * as actions from "../actions";

class ApplyCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cobuyer: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.handleLoanForm(data);
  }

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#213159",
          height: "auto",
          fontFamily: "Roboto"
        }}>
        <div className="row">
          <div className="col-sm-2" />
          <div
            className="col-sm-8"
            style={{
              width: "100%",
              backgroundColor: "light blue",
              "line-height": "100px",
              fontFamily: "Open Sans",
              fontSize: "30px",
              textAlign: "center",
              color: "#e7e7e7"
            }}>
            Apply for Credit
          </div>
          <div className="col-sm-2" />
        </div>
        <div style={{ paddingTop: "10px" }} className="row">
          <div className="col-sm-2 col-xs-1" />
          <LoanForm className="row" onSubmit={this.handleSubmit} />
          <div className="col-sm-2 col-xs-1" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, actions)(ApplyCredit);
