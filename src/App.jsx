import { NavLink, Route, Routes } from "react-router-dom";
import Contacts from "./components/contacts/Contacts"
import Home from "./components/home/Home";
import Parent from "./components/parent/Parent"
 import Red from "./components/red/Red";
 import Rose from "./components/rose/Rose";
 import White from "./components/white/White";
 import SignUp from "./components/signUp/SignUp";
 import Cart from "./components/cart/Cart";
 import ContextProvider from "./contexts/Context";
 import Footer from "./components/footer/Footer";
 import Profile from "./components/profile/Profile";


function App() {
  return (
    <>
    <header className="header">

      <div className="header-bg"></div>
      <h1>
        <NavLink to="/">Lowe wine</NavLink>
      </h1>
    </header>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />}></Route>
            <Route path="/red" element={<Red />}></Route>
            <Route path="/white" element={<White />}></Route>
            <Route path="/rose" element={<Rose />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
