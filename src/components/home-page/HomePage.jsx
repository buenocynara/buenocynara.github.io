import React, { Component } from "react";
import s from "./HomePage.module.css";
import simLogo from "../single_logo.png";

class HomePage extends Component {
  render() {
    return (
      <>
        {/* Banner */}
        <div
          className={s.banner}
          style={{
            backgroundImage: `url(${this.props.banner.image})`
          }}
        >
          <div className={s.bannerTitleContainer}>
            <div className={s.bannerTitle}>{this.props.banner.quote}</div>
          </div>
        </div>

        {/* About */}
        <div className={s.aboutContainer} id="About">
          <div className={s.titleContainer}>
            <h4 className={s.name}>{this.props.aboutMe.title}</h4>

            <h4 className={s.nick}>{this.props.aboutMe.nick}</h4>
          </div>

          <p className={s.aboutText}>{this.props.aboutMe.firstParagraph}</p>
          <img src={simLogo} alt="single-logo" className="singleLogo" />
          <br />
          <h4>{this.props.aboutMe.mission}</h4>
          <p className={s.aboutText}>{this.props.aboutMe.missionText}</p>

          <h4>{this.props.aboutMe.vision}</h4>
          <p className={s.aboutText}>{this.props.aboutMe.visionText}</p>

          <h4>{this.props.aboutMe.values}</h4>
          <p className={s.aboutText}>{this.props.aboutMe.valuesText}</p>

          <img src={simLogo} alt="single-logo" className="singleLogo" />
          <br />

          <h4>{this.props.aboutMe.whyMe}</h4>
          <p className={s.aboutText}>{this.props.aboutMe.whyMeText}</p>
        </div>
      </>
    );
  }
}

export default HomePage;
