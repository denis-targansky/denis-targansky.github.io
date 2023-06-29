import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      languageData: {},
      sharedData: {}
    };
    this.loadLanguageFromPath = this.loadLanguageFromPath.bind(this);
  }

  componentDidMount() {
    this.loadSharedData();
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadLanguageFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ languageData: data });
        document.title = `${this.state.languageData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header
          languageBasicInfo={this.state.languageData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
          loadLanguageFromPath={this.loadLanguageFromPath}
        />
        <About
          languageBasicInfo={this.state.languageData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        {/* This doesn't apply for now as I want the portfolio to remain simple
        <Projects
          languageProjects={this.state.languageData.projects}
          languageBasicInfo={this.state.languageData.basic_info}
        />
        */}
        <Skills
          languageSkills={this.state.languageData.skills}
          languageBasicInfo={this.state.languageData.basic_info}
        />
        <Experience
          languageExperience={this.state.languageData.experience}
          languageBasicInfo={this.state.languageData.basic_info}
        />
        <Footer languageBasicInfo={this.state.languageData.basic_info} />
      </div>
    );
  }
}

export default App;
