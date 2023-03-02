import Header from "./components/header";
import { Introduce } from "./components/introduce";
import { Service } from "./components/service";
import { Work } from "./components/work";
import { About } from "./components/about";
import { CompanySlider } from "./components/companySlider";
import { FounderInfo } from "./components/founderInfo";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import { FormContact } from "./components/formContact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="px-[25px] desktop:px-[70px] ">
      <Header />
      <Introduce />
      <Work />
      <Service />
      <About />
      <CompanySlider />
      <FounderInfo />
      <Team />
      <Contact />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
