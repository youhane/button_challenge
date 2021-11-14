// Components
import Button from "./Button";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div className="App">
    <h1>Buttons</h1>
    <div>
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow="true" />
      <Button disabled />
      <Button variant="text" disabled />
      <Button startIcon="shopping-cart" />
      <Button color="red" />
      <Button color="blue" />
      <Button color="green" />
      <Button size="sm" />
      <Button />
      <Button size="lg" />
    </div>
    <GlobalStyle />
  </div>
);

export default App;