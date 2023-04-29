import Card from "../card/Card";
import "./CardList.style.css";

const CardList = ({className, users}) => {


  return (
    <div className={className}>
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   state = {};

//   render() {
//     console.log(this.props.users);
//     console.log("Render Called From CardList");
//     const { users, className } = this.props;

//     return (
//       <div className={className}>
//         {users.map((user) => {
//           return (
//             <Card key={user.id} user={user} />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
