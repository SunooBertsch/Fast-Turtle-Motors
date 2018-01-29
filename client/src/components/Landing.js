import React from "react";
import imageList from "../LandingImages";

class Landing extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div
          id="carouselLanding"
          className="carousel slide"
          data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imageList[0]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[1]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[2]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[3]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[4]} alt="car" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imageList[5]} alt="car" />
            </div>
          </div>

          <div
            className="row"
            style={{
              backgroundColor: "#213461"
            }}>
            <div className="col-sm-6" style={{ fontFamily: "Fira Sans" }}>
              <div
                ref="contact"
                style={{
                  backgroundColor: "#213461",
                  maxHeight: "410px",
                  width: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#e7e7e7"
                  // maxWidth: "267px"
                }}>
                <h3
                  style={{
                    margin: "0px",
                    paddingTop: "30px",
                    textAlign: "center"
                  }}>
                  Store Hours
                </h3>
                <h5 style={{ fontStyle: "italic", textAlign: "center" }}>
                  By Appointment Only
                </h5>
                <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
                  <li>10:00 AM - 6:00 PM Monday - Friday</li>
                  <li>11:00 AM - 5:00 PM Saturday</li>
                  <li>11:00 AM - 4:00 PM Sunday</li>
                </ul>
                <h3 style={{ textAlign: "center" }}>Contact Information</h3>
                <ul className="list-unstyled" style={{ fontSize: "12pt" }}>
                  <li>Phone: (714) 987-1661</li>
                  <li>Email: info@fastturtlemotors.com</li>
                  <li>
                    Like us on Facebook:
                    <a href="https://www.facebook.com/FastTurtleMotors/">
                      <i
                        className="fa fa-facebook-square"
                        style={{ paddingLeft: "6px", fontSize: "12pt" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6"
              style={{ fontFamily: "Fira Sans" }}>
              <div
                className="container col-xs-12 col sm-6"
                style={{
                  color: "#e7e7e7",
                  paddingBottom: "10px"
                }}>
                <h3>Email Us</h3>
                <form method="POST" action="send">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeHolder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeHolder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      placeHolder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeHolder="Message"
                    />
                  </div>
                  <button className="btn submit-email" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div
              className="col-sm-12"
              style={{
                position: "relative",
                height: "0",
                paddingBottom: "56.25%",
                overflow: "hidden"
              }}>
              <iframe
                style={{
                  border: "0",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }}
                title="map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSzI5EhmR4uAcwOjCuIjt0wHptNhYT8RE&q=22605+La+Palma+Ave+ste+505,Yotba+Linda+CA"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
