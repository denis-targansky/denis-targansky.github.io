import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  applyPickedLanguage(pickedLanguage, pickedLanguageIconId) {
    this.swapCurrentlyActiveLanguage(pickedLanguageIconId);
    var languagePath;
    var direction;
    if (pickedLanguage === window.$englishLanguage) {
      languagePath = `res_english.json`;
      direction = "ltr";
    } else if (pickedLanguage === window.$hebrewLanguage) {
      languagePath = `res_hebrew.json`;
      direction = "rtl";
    } else if (pickedLanguage === window.$russianLanguage) {
      languagePath = `res_russian.json`;
      direction = "ltr";
    }
    this.props.loadLanguageFromPath(languagePath);
    document.getElementById('root').setAttribute("dir", direction);
    document.getElementById('root').classList.remove("rtl", "ltr");
    document.getElementById('root').classList.add(direction);
    document.getElementById('root').setAttribute("lang", pickedLanguage);
  }

  swapCurrentlyActiveLanguage(pickedLanguageIconId) {
    const langIconIds = [
      window.$englishLanguageIconId,
      window.$hebrewLanguageIconId,
      window.$russianLanguageIconId
    ]

    for (var i = 0; i < langIconIds.length; i++) {
      var langIconId = langIconIds[i];
      if (langIconId === pickedLanguageIconId) {
        continue;
      }

      document
        .getElementById(langIconId)
        .removeAttribute("filter", "brightness(40%)");
    }

    document
      .getElementById(pickedLanguageIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.applyPickedLanguage(
      window.$englishLanguage,
      window.$englishLanguageIconId
    );
  }

  render() {
    if (this.props.sharedBasicInfo) {
      this.titles = this.props.sharedBasicInfo.titles.map(x => [x.toUpperCase(), 1500]).flat();
    }

    if (this.props.languageBasicInfo) {
      var name = this.props.languageBasicInfo.name;
      var sectionName = this.props.languageBasicInfo.section_name.language;
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ minHeight: window.innerHeight, display: 'block' }}>
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#8ba3e9"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
              <br />
              <br />
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br />
              <h1 className="mb-0">
                <span style={{ textAlign: "center" }}>{name}</span>
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>

          <div className="col-md-12 mx-auto text-center language" dir="ltr">
            <h1 className="section-title" style={{ color: "black" }}>
              <span style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$englishLanguage,
                  window.$englishLanguageIconId
                )
              }
              className="mx-2"
              style={{ display: "inline" }}>
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-canada"
                data-inline="false"
                id={window.$englishLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$hebrewLanguage,
                  window.$hebrewLanguageIconId
                )
              }
              className="mx-2"
              style={{ display: "inline" }}>
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-israel"
                data-inline="false"
                id={window.$hebrewLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$russianLanguage,
                  window.$russianLanguageIconId
                )
              }
              className="mx-2"
              style={{ display: "inline" }}>
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-russia"
                data-inline="false"
                id={window.$russianLanguageIconId}
              ></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
