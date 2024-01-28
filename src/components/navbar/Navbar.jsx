import { useState } from "react";
import style from "./style.module.css";
import { FaRegFaceSmile } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [button, setButton] = useState(false);
  return (
    <>
      <div className={style.drawer} style={{top:button ? 0 : -999}}>
      <span className={style.close} onClick={()=>{
        setButton(false)
      }}>
        <IoCloseSharp />
      </span>
        <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">portfolio</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">single page</a></li>
        
        </ul>
      </div>
      <div className={style.container}>
        <a href="/" className={style.navbarbrand}>
          <FaRegFaceSmile className={style.icon} />
          Work
          <label className={style.logoview}>smart</label>
        </a>
        <div className={style.buttons}>
          <button className={style.contact}>contact us</button>
          <button
            className={style.menu}
            onClick={() => {
              setButton(true);
            }}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
