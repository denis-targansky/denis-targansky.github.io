import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
            <a key={network.name} className="m-4" href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
        );
      });
    }
    if (this.props.languageBasicInfo) {
      var sectionName = this.props.languageBasicInfo.section_name.about;
      var hello = this.props.languageBasicInfo.description_header;
      var about = this.props.languageBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-3">
            <div className="col-md-2 mb-3 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="400px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <div className="social-links">{networks}</div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "170%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
