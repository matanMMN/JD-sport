import "./Career.css";
import afterHeading from "./career-images/afterHeading.jpeg";
import career from "./career-images/career.png";

export default function Career() {
  return (
    <div>
      <div className="aftet-heading"></div>

      <div className="partTwo-container">
        <div className="career-container">
          <img className="career-img" src={career} />
        </div>
        <div className="sendUs-container">
          <h1 className="title-career">מעוניין במשרה אצלנו בWolf Sport?</h1>
          <ol className="send-messege">
            <p></p>
            <form action="mailto:matanmmn@gmail.com" method="post">
              <div className="name-email">
                <div className="name">
                  <label className="label-name">שם מלא:</label>
                  <br></br>
                  <input className="input-text" type="text" />
                </div>
                <div className="טלפון">
                  <label className="label-name">טלפון: </label>
                  <br></br>
                  <input className="input-text" type="phone" />
                </div>
              </div>
              <br />
              <div className="send">
                <label className="label-messege">
                  רשום/רשמי כמה מילים על עצמך
                </label>
                <br />

                <textarea
                  className="text-input"
                  name="name"
                  rows="5"
                  cols="30"
                ></textarea>

                <br />
                <button className="Button-send" type="button">
                  שלח/י
                </button>
              </div>
            </form>
          </ol>
        </div>
      </div>
    </div>
  );
}
