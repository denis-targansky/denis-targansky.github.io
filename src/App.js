import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    /* This doesn't currently apply as the portfolio is only in English for now
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    */
    var resumePath = `res_primaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  /* This doesn't currently apply as the portfolio is only in English for now
  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }
  */

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />

        <div className="col-md-12 mx-auto text-center language">
          <h1 className="section-title" style={{ color: "black" }}>
            <span style={{ textAlign: "center" }}>
              Languages
            </span>
          </h1>
          <div style={{ display: "inline" }}>
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-canada"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div style={{ display: "inline" }}>
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-israel"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
          <div style={{ display: "inline" }}>
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-russia"
              data-inline="false"
              id={window.$tertiaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        {/* This doesn't apply for now as I want the portfolio to remain simple
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        */}
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
