import FirstSection from "./components/firstSection/FirstSection";
import Navbar from "./components/navbar/Navbar";
import SecondSection from "./components/secondSection/SecondSection";
import ThirdSection from "./components/thirdSection/ThirdSection";

const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section>
        <FirstSection />
      </section>
      <section style={{ backgroundColor: "#fff" }}>
        <SecondSection />
      </section>
      <section>
        <ThirdSection />
      </section>
    </>
  );
};

export default App;
