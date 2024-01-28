import style from "./style.module.css";
import { FaPlay } from "react-icons/fa";

const SecondSection = () => {
  return (
    <div className="container">
      <div className={style.container}>
        <h2>
          We are the largest Business expert in Digital & Marketing Agency{" "}
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti
          odit? At iure facere, porro repellat officia quas, dolores magnam
          assumenda soluta odit harum voluptate inventore ipsa maiores fugiat
          accusamus eos nulla. Iure voluptatibus explicabo officia.
        </p>
        <div>
          <img
            src="https://p.w3layouts.com/demos_new/template_demo/26-02-2020/worksmart-liberty-demo_Free/2051390250/web/assets/images/video.jpg"
            alt=""
          />
          <span className={style.playButton}>
            <FaPlay />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
