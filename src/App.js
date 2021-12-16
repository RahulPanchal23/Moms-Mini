import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import React from "react";
import axios from "axios";
import Products from "./components/products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { connect } from "react-redux";
import { logIn } from "./actions/actions";
import AboutUs from "./components/AboutUs";

class App extends React.Component {
  // const dispatch = useDispatch()?
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoggedIn: false,
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  componentDidMount() {
    console.log(this.props.a);
    axios
      .get("/users", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then(r => {
        console.log(r);
        this.props.addUser();
        this.setState({
          user: r.data,
          isLoggedIn: true,
        });
      })
      .catch(e => console.log(e));
  }

  handleLogIn = data => {
    console.log(data, "APP ");
    this.setState({
      user: data,
      isLoggedIn: true,
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("token");
    this.setState({
      user: null,
      isLoggedIn: false,
    });
    console.log("Log Out Run");
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Navbar userR={this.state.isLoggedIn} />
              <Login handleLogIn={this.handleLogIn} />
            </Route>
            <Route path="/cart">
              <Navbar />
              <Cart />
            </Route>
            <Route path="/products">
              <Navbar />
              <Products />
            </Route>
            <Route path="/aboutUs">
              <Navbar />
              <AboutUs />
            </Route>
            {/* <Route path="/signup">
              <Signup />
            </Route> */}
            <Route path="/gallery">
              <Navbar />
              <Gallery />
            </Route>
            <Route path="/">
              <Navbar />
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    a: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addUser: () => dispatch(logIn()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
