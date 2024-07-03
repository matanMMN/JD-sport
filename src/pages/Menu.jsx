import "./Career.css";
import afterHeading from "./career-images/kick-boxing-header.jpg";
import career from "./career-images/career.png";
import secLogo from "./career-images/second-logo.png";

export default function Career() {
  return (
    <div>
      <div className="aftet-heading">
        <img className="afterHeading-img" src={afterHeading} />
      </div>

      <div className="tree-container">
        <div className="container" id="phone">
          <a href="/Order">
            <div className="icon-container">
              <img className="logo-img" src={secLogo} />
            </div>
            <div className="text-career-container">בגדי נשים</div>
          </a>
        </div>
        <div className="container" id="phone">
          <a href="/Order">
            <div className="icon-container">
              <img className="logo-img" src={secLogo} />
            </div>
            <div className="text-career-container">בגדי גברים</div>
          </a>
        </div>
        <div className="container" id="phone">
          <a href="/Order">
            <div className="icon-container">
              <img className="logo-img" src={secLogo} />
            </div>
            <div className="text-career-container">ציוד ספורט</div>
          </a>
        </div>
        <div className="container" id="phone">
          <a href="/Order">
            <div className="icon-container">
              <img className="logo-img" src={secLogo} />
            </div>
            <div className="text-career-container">נעליים</div>
          </a>
        </div>
      </div>
      <br />
      <div className="partTwo-container">
        <div className="sport-container">
          <img className="sport-img" src={career} />
        </div>
      </div>
    </div>
  );
}
