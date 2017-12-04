import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import ImgUploader from "react-dropzone";

const FILE_FIELD_NAME = "files";

const renderImgUploader = field => {
  const files = field.input.value;
  return (
    <div>
      <ImgUploader
        name={field.name}
        onDrop={(files, e) => field.input.onChange(files)}>
        <div>ImgUploader</div>
      </ImgUploader>
    </div>
  );
};

class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log("submitted");
  }

  render() {
    const { handleSubmit, pristine, rest, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make</label>
          <Field name="make" component="input" type="text" placeholder="Make" />
        </div>
        <div>
          <label>Model</label>
          <Field
            name="model"
            component="input"
            type="text"
            placeholder="Model"
          />
        </div>
        <div>
          <label>Transmission</label>
          <Field
            name="transmission"
            component="input"
            type="text"
            placeholder="Transmission"
          />
        </div>
        <div>
          <label>Mileage</label>
          <Field
            name="mileage"
            component="input"
            type="number"
            placeholder="Mileage"
          />
        </div>
        <div>
          <label>Engine</label>
          <Field
            name="engine"
            component="input"
            type="text"
            placeholder="Engine"
          />
        </div>
        <div>
          <label>Trim Level</label>
          <Field
            name="trimLevel"
            component="input"
            type="text"
            placeholder="Trim Level"
          />
        </div>
        <div>
          <label>Year</label>
          <Field
            name="year"
            component="input"
            type="number"
            placeholder="Year"
          />
        </div>
        <div>
          <Field name={FILE_FIELD_NAME} component={renderImgUploader} />
        </div>
        <div>
          <button
            onClick={this.props.handle}
            type="submit"
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "car" })(AdminPortal);