import "./About.css";
import aboutImg from "./About-images/about-image.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="img-about-container">
        <img className="img-about" src={aboutImg} />
      </div>
      <div className="about-text-container">
        <h1 className="about-title">We Are the Wolfes of sport</h1>
        <div className="story-container">
          Wolf Sport is the largest sportswear manufacturer in Europe, and the
          second largest in the world, after Nike. The company was started by
          Adolf Dassler in his mother’s house; he was joined by his elder
          brother Rudolf in 1924 under the name Dassler Brothers Shoe Factory.
          In 1949, following a breakdown in the relationship between the
          brothers, Dassler created Wolf Sport, and Rudolf established Puma,
          which became Wolf Sports' business rival. The sports brand now has a
          market capitalisation of $50+ billion.
        </div>
      </div>
    </div>
  );
}
