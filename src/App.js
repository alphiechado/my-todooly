import "./App.css";
import DataProvider from "./Components /DataProvider";
import Footer from "./Components /Footer";
import FormInput from "./Components /FormInput";
import List from "./Components /List";
import "./index.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Todooly</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
