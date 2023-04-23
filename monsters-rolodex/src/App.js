import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
    };

    console.log("Constructor.");
  }

  componentDidMount() {
    console.log("Component Did Mount.");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { users: users, filteredUsers: users };
          },
          () => {
            console.log(this.state.users);
          }
        )
      );
  }

  render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase();

            this.setState(
              () => {
                return { searchField }
              }
            );
          }}
        />

        {filteredUsers.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
