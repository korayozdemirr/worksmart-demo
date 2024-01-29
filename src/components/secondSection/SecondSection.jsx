import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { FaPlay } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const SecondSection = () => {
  // modal outside click is not work
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(modalAreaRef.current) && !path.includes(buttonRef.current)) {
      setOpen(false);
    }
  };
  const modalAreaRef = useRef();
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div
        className={style.content}
        style={open ? { display: "flex" } : { display: "none" }}
      >
         <span className={style.closeButton} onClick={()=>{
          setOpen(false)
         }}>
              <IoCloseSharp />
            </span>
        <iframe ref={modalAreaRef} width="560" height="315" src="https://www.youtube.com/embed/lXGvNdV02aQ?si=YqcNEEc5e6I9_iRR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="container">
        <div className={style.container}>
          <h2>
            We are the largest Business expert in Digital & Marketing Agency{" "}
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            corrupti odit? At iure facere, porro repellat officia quas, dolores
            magnam assumenda soluta odit harum voluptate inventore ipsa maiores
            fugiat accusamus eos nulla. Iure voluptatibus explicabo officia.
          </p>
          <div className={style.image}>
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/26-02-2020/worksmart-liberty-demo_Free/2051390250/web/assets/images/video.jpg"
              alt=""
            />
            <span
              ref={buttonRef}
              className={style.playButton}
              onClick={() => {
                setOpen(true);
              }}
            >
              <FaPlay />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
