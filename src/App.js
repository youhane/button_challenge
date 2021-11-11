// Components
import Button from "./Button";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div className="App">
    <h1>Buttons</h1>
    <Button />
    <Button variant="outline" />
    <Button variant="text" />
    <Button disableShadow />
    <Button disabled />
    <Button variant="text" disabled />
    <Button startIcon="shopping-cart" />
    <GlobalStyle />
  </div>
);

export default App;