import React from "react";
import UserNav from "./UserNav";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
    this.updateSearchVal = this.updateSearchVal.bind(this);
    this.initSearch = this.initSearch.bind(this);
  }

  updateSearchVal(e) {
    this.setState({
      search: e.target.value,
    });
  }

  initSearch() {
    // NEED TO DO SEARCH QUERY AND UPDATE states (PAGE, *CMAN, *STOCK)-in APP.js- with results
    console.log(this.state.search);
  }

  render() {
    return (
      <div>
        <UserNav
          userLogout={this.props.userLogout}
          change_page={this.props.change_page}
          user={this.props.user}
        />
        <p>Home</p>
        <input
          type="text"
          placeholder="Stock or Congressmen"
          onChange={this.updateSearchVal}
        ></input>
        <button onClick={this.initSearch}>Search</button>
      </div>
    );
  }
}

export default Home;
