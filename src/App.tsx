import Header from "./components/header";
import { Introduce } from "./components/introduce";
import { Service } from "./components/service";
import { Work } from "./components/work";

function App() {
  return (
    <div className="px-[25px] h-[10000px] desktop:px-[70px] ">
      <Header />
      <Introduce />
      <Work />
      <Service />
    </div>
  );
}

export default App;
