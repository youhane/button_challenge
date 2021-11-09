// Components
import Button from "./Components/ButtonDefault/Button";
import ButtonOutline from "./Components/ButtonOutline/ButtonOutline";
import ButtonText from "./Components/ButtonText/ButtonText";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div className="App">
    <h1>Button</h1>
    <Button />
    <ButtonOutline />
    <ButtonText />
    <GlobalStyle />
  </div>
);

export default App;