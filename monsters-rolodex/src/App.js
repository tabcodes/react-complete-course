import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };

    console.log("Constructor.");
  }

  componentDidMount() {
    console.log("Component Did Mount.");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { users: users, filteredUsers: users };
        })
      );
  }

  onUserSearch = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render called");
    const { onUserSearch } = this;

    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onUserSearch}
          placeholder="This is the Way"
          className="search-box"
        />

        <CardList className="card-list" users={filteredUsers} />
      </div>
    );
  }
}

export default App;
