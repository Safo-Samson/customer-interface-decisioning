import "./App.css";
import NewLoan from "./components/StartLoan/NewLoan";
import CombinedBar from "./components/UIComponents/CombinedBar";
import StartLoan from "./components/StartLoan/StartLoan";
import Homepage from "./components/startLoan/Homepage";

function App() {
  return (
    <>
      <CombinedBar />
      {/* <NewLoan /> */}
      <Homepage />
    </>
  );
}

export default App;
