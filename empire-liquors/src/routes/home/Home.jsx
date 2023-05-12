import imgBourbon from "../../assets/img/bourbon.png";
import imgVodka from "../../assets/img/vodka.png";
import imgTequila from "../../assets/img/tequila.png";
import imgGin from "../../assets/img/gin.png";
import imgScotch from "../../assets/img/scotch.png";
import Directory from "../../components/Directory/Directory";

const Home = () => {
  const liquorTypes = [
    {
      id: 1,
      title: "Vodka",
      imagePath: imgVodka,
    },
    {
      id: 2,
      title: "Bourbon",
      imagePath: imgBourbon,
    },
    {
      id: 3,
      title: "Tequila",
      imagePath: imgTequila,
    },
    {
      id: 4,
      title: "Gin",
      imagePath: imgGin,
    },
    {
      id: 5,
      title: "Scotch",
      imagePath: imgScotch,
    },
  ];

  return (
    <div>
      <Directory types={liquorTypes} />
    </div>
  );
};

export default Home;
