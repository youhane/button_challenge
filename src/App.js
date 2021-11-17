// Components
import Button from "./Button";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div className="App">
    <h1>Buttons</h1>
    <div>
      <div>
        <Button />
      </div>
      <div>
        <Button variant="outline" />
      </div>
      <div>
        <Button variant="text" />
      </div>
      <div>
        <Button disableShadow="true" />
      </div>
      <div>
        <Button disabled />
        <Button disabled variant="text" />
      </div>
      <div>
        <Button icon="shopping-cart" start />
        <Button icon="shopping-cart" end />
      </div>
      <div>
        <Button color="red" />
        <Button color="blue" />
        <Button color="green" />
      </div>
      <div>
        <Button size="sm" />
        <Button size="lg" />
      </div>
    </div>
    <GlobalStyle />
  </div>
);

export default App;