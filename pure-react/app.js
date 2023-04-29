const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React loading components!"),
    React.createElement(
      Person,
      { name: "Gordon", occupation: "Scientist" },
      null
    ),
    React.createElement(
      Person,
      { name: "David", occupation: "Government" },
      null
    ),
    React.createElement(Person, { name: "Samus", occupation: "Soldier" }, null),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
