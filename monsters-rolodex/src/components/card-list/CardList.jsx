import { Component } from "react";

class CardList extends Component {
  state = {};

  render() {
    console.log(this.props.users)
    console.log("Render Called From CardList");
    const { users } = this.props;

    return (
      <div>
        {users.map((user) => {
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

export default CardList;
