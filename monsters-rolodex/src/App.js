import "./App.css";

import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const onUserSearch = (ev) => {
    const searchFieldString = ev.target.value.toLowerCase();
    setSearchFieldValue(searchFieldString);
  };

  const onTitleChange = (ev) => {
    const titleString = ev.target.value.toLowerCase();
    setTitle(titleString);
  };

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchFieldValue);
    });

    setFilteredUsers(newFilteredUsers);
  }, [users, searchFieldValue]);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onUserSearch}
        placeholder="Filter Users..."
        className="search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="Set Title..."
        className="search-box"
      />
      <CardList className="card-list" users={filteredUsers} />
    </div>
  );
};

// Class component version

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       users: [],
//       searchField: "",
//     };

//     console.log("Constructor.");
//   }

//   componentDidMount() {
//     console.log("Component Did Mount.");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { users: users, filteredUsers: users };
//         })
//       );
//   }

//   onUserSearch = (e) => {
//     const searchField = e.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("render called");
//     const { onUserSearch } = this;

//     const filteredUsers = this.state.users.filter((user) => {
//       return user.name.toLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">React Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onUserSearch}
//           placeholder="This is the Way"
//           className="search-box"
//         />

//         <CardList className="card-list" users={filteredUsers} />
//       </div>
//     );
//   }
// }

export default App;
