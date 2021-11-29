import "./App.css";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import Watchlist from "./Watchlist";
import CreateAccount from "./CreateAccount";
import Community from "./Community";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      page: "Home",
      stock_page: "",
      cman_page: "",
    };
    this.change_page = this.change_page.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  change_page(event) {
    let page_name = event.target.getAttribute("name");
    this.setState({
      page: page_name,
    });
  }

  userLogin(username) {
    this.setState({
      user: username,
      page: "Home",
    });
  }

  userLogout() {
    this.setState({
      user: "",
      page: "Home",
    });
  }

  render() {
    let display_page = (
      <Home
        user={this.state.user}
        userLogout={this.userLogout}
        change_page={this.change_page}
      />
    );
    if (this.state.page == "Login") {
      display_page = (
        <Login change_page={this.change_page} userLogin={this.userLogin} />
      );
    } else if (this.state.page == "Watchlist") {
      display_page = <Watchlist change_page={this.change_page} />;
    } else if (this.state.page == "CreateAccount") {
      display_page = <CreateAccount change_page={this.change_page} />;
    } else if (this.state.page == "Community") {
      display_page = <Community change_page={this.change_page} />;
    }
    return display_page;
  }
}

export default App;
