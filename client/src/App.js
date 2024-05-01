import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import "antd/dist/antd.min.css";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";
import Profile from "./pages/profile";
import  AdminLogin  from "./pages/adminLogin";
import  AdminRegister  from "./pages/adminRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Profile} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/adminlogin" exact component={AdminLogin} />
        <Route path="/adminregister" exact component={AdminRegister} />
        <Route path="/booking/:carid" exact component={BookingCar} />
        <Route path="/userbookings" exact component={UserBookings} />
        <Route path="/addcar" exact component={AddCar} />
        <Route path="/editcar/:carid" exact component={EditCar} />
        <Route path="/admin" exact component={AdminHome} />
      </BrowserRouter>
    </div>
  );
}

export default App;

