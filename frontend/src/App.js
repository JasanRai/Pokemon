import Navbar from "./components/Navbar";
import NavbarContextProvider from "./context/NavbarContext";
import Pokemon from "./pages/Pokemon";

/* //Setup context */

//Wrap your application in context
function App() {
  return (
    <div>
      <NavbarContextProvider>
        <Navbar />
        <Pokemon />
      </NavbarContextProvider>
    </div>
  );
}

export default App;
