import "./Home.css";
import headerImg from "../pages/Home-images/header-home.png";

export default function Home() {
  return (
    <div>
      <header class="line">
        <div class="text">Dont Miss the sale - 60% Discount!</div>
      </header>
      <img className="hut-sale" src={headerImg} />
    </div>
  );
}
