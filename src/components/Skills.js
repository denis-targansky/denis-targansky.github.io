import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.languageBasicInfo) {
      var sectionName = this.props.languageBasicInfo.section_name.skills;
      var sections = this.props.languageSkills.sections.map(function (section, i) {
        var skills = section.icons.map(function (skill, i) {
          var logo;
          if (skill.class) {
            logo = <div style={{ fontSize: "220%" }}><i className={skill.class}></i><p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }} >{skill.name}</p></div>;
          } else if (skill.img) {
            var logoPic = "images/" + skill.img;
            logo = <div style={{ fontSize: "220%" }}><img width="71px" height="71px" style={{ verticalAlign: "inherit" }} src={logoPic} alt="Logo placeholder" /><p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }} > {skill.name} </p></div>;
          }
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skill-tile">
                  {logo}
                </div>
              </span>
            </li>
          );
        });

        return (
          <div className="col-md-12" key={i}>
            <div className="col-md-12">
              <h3 className="skill-title">
                <span className="text-white">{section.sectionName}</span>
              </h3>
            </div>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto skill-icon">{skills}</ul>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="skills" >
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{sections}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
