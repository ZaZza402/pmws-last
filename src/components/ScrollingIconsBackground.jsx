import React from "react";
import "./ScrollingIconsBackground.css";

// Import all icons
import airplane from "../assets/svg-icons/airplane-tilt-thin.svg";
import bird from "../assets/svg-icons/bird-thin.svg";
import building from "../assets/svg-icons/building-thin.svg";
import clipboard from "../assets/svg-icons/clipboard-text-thin.svg";
import clover from "../assets/svg-icons/clover-thin.svg";
import compass from "../assets/svg-icons/compass-thin.svg";
import door from "../assets/svg-icons/door-open-thin.svg";
import fileDoc from "../assets/svg-icons/file-doc-thin.svg";
import globe from "../assets/svg-icons/globe-thin.svg";
import idCard from "../assets/svg-icons/identification-card-thin.svg";
import key from "../assets/svg-icons/key-thin.svg";
import mapPin from "../assets/svg-icons/map-pin-thin.svg";
import mapTrifold from "../assets/svg-icons/map-trifold-thin.svg";
import navigationArrow from "../assets/svg-icons/navigation-arrow-thin.svg";
import park from "../assets/svg-icons/park-thin.svg";
import sparkle from "../assets/svg-icons/sparkle-thin.svg";
import stamp from "../assets/svg-icons/stamp-thin.svg";
import suitcase from "../assets/svg-icons/suitcase-rolling-thin.svg";
import sunHorizon from "../assets/svg-icons/sun-horizon-thin.svg";
import trendUp from "../assets/svg-icons/trend-up-thin.svg";

const allIcons = [
  airplane,
  bird,
  building,
  clipboard,
  clover,
  compass,
  door,
  fileDoc,
  globe,
  idCard,
  key,
  mapPin,
  mapTrifold,
  navigationArrow,
  park,
  sparkle,
  stamp,
  suitcase,
  sunHorizon,
  trendUp,
];

const ScrollingIconsBackground = () => {
  return (
    <div className="scrolling-icons-background">
      {/* Row 1 - Scrolls Left */}
      <div className="scrolling-icons-bg-row scrolling-icons-bg-row--left">
        <div className="scrolling-icons-bg-track">
          {allIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
          {allIcons.map((icon, idx) => (
            <img
              key={`dup-${idx}`}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolls Right */}
      <div className="scrolling-icons-bg-row scrolling-icons-bg-row--right">
        <div className="scrolling-icons-bg-track">
          {allIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
          {allIcons.map((icon, idx) => (
            <img
              key={`dup-${idx}`}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Row 3 - Scrolls Left */}
      <div className="scrolling-icons-bg-row scrolling-icons-bg-row--left">
        <div className="scrolling-icons-bg-track">
          {allIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
          {allIcons.map((icon, idx) => (
            <img
              key={`dup-${idx}`}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Row 4 - Scrolls Right */}
      <div className="scrolling-icons-bg-row scrolling-icons-bg-row--right">
        <div className="scrolling-icons-bg-track">
          {allIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
          {allIcons.map((icon, idx) => (
            <img
              key={`dup-${idx}`}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Row 5 - Scrolls Left */}
      <div className="scrolling-icons-bg-row scrolling-icons-bg-row--left">
        <div className="scrolling-icons-bg-track">
          {allIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
          {allIcons.map((icon, idx) => (
            <img
              key={`dup-${idx}`}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Row 6 - Scrolls Right */}
      <div className="scrolling-icons-bg-row scrolling-icons-bg-row--right">
        <div className="scrolling-icons-bg-track">
          {allIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
          {allIcons.map((icon, idx) => (
            <img
              key={`dup-${idx}`}
              src={icon}
              alt=""
              className="scrolling-icon-bg"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingIconsBackground;
