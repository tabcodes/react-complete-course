import { Component } from "react";
import Card from "../card/Card";
import "./CardList.style.css"
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
            <Card user={user} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
