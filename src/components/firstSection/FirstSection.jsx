import style from "./style.module.css"
const FirstSection = () => {
  return (
    <div className="container">
      <div className={style.container}>
        <div className={style.colLeft}>
          <h3>Design <br /> Develop <br /> Digital  Market</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          <a href="#">get started</a>
        </div>
        <div className={style.colRight}>
            <img className={style.image} src="https://p.w3layouts.com/demos_new/template_demo/26-02-2020/worksmart-liberty-demo_Free/2051390250/web/assets/images/main.jpg" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
