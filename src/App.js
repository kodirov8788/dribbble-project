import './App.css';
import Banner from "./components/Banner/Banner"
import Products from "./components/Products/Products"
import Sidebar from "./components/Saidbar/Saidebar"
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Banner />
      <Products />
    </div>
  );
}

export default App;
