import './App.css';
import Banner from "./components/Banner/Banner"
import Products from "./components/Products/Products"
import Sidebar from "./components/Saidbar/Saidebar"
import Lear from "./components/Lear/Lear"
function App() {
  return (
    <div className="App">

      <Banner />
      <Products />
      <Sidebar />
      <Lear />
    </div>
  );
}

export default App;
