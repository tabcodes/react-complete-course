import './LiquorTypes.scss'
import imgBourbon from './assets/img/bourbon.png'
import imgVodka from './assets/img/vodka.png'
import imgTequila from './assets/img/tequila.png'
import imgGin from './assets/img/gin.png'
import imgScotch from './assets/img/scotch.png'

const App = () => {
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
    <div className="categories-container">
      {liquorTypes.map(({ id, title, imagePath }) => (
        <div className="category-container">
          <div className="background-image" style={{backgroundImage: `url(${imagePath})`}}></div>
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
