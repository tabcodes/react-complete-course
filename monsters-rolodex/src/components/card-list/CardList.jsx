import { Component } from "react";

class CardList extends Component {
  state = {};

  render() {
    console.log(this.props.users);
    console.log("Render Called From CardList");
    const { users, className } = this.props;

    return (
      <div className={className}>
        {users.map((user) => {
          return (
            <div className="card-container">
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={`${user.name}`}
              />
              <div key={user.id}>
                <h1>{user.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
