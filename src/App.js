import FuncComp from "./Components/FuncComp";
import { ClassComp, AnotherClassComp } from "./Components/ClassComp";
import CounterClass from "./Components/CounterClass";
import AnotherCounterClass from "./Components/AnotherCounterClass";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ChangingBadge from "./Components/ChangingBadge";
import ListNKeys from "./Components/ListNKeys";
import IncDec from "./Components/IncDec";
import FormComp from "./Components/FormComp";
import FormSelectComp from "./Components/FormSelectComp";
import CurrencyConverter from "./Components/CurrencyConverter";
import TempConverter from "./Components/TempConverter";
import PassArgument from "./Components/PassArgument";
import LoginPage from "./Components/LoginPage";
import LiftingState from "./Components/LiftingState";

export default function App() {
  return (
    <div className="App mb-5">
      <FuncComp />
      <ClassComp />
      <AnotherClassComp />
      <CounterClass />
      <AnotherCounterClass />
      <ChangingBadge />
      <ListNKeys />
      <IncDec />
      <br />
      <FormComp />
      <br />
      <FormSelectComp />
      <CurrencyConverter />
      <TempConverter />
      <br />
      <PassArgument />
      <LoginPage />
      <LiftingState />
    </div>
  );
}
