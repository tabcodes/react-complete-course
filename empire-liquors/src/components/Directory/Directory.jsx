import LiquorTypeItem from "../LiquorTypeItem/LiquorTypeItem";
import './Directory.scss'

const Directory = ({ types }) => {
  return (
    <div className="categories-container">
      {types.map((liquorType) => (
        <LiquorTypeItem key={liquorType.id} liquorType={liquorType} />
      ))}
    </div>
  );
};

export default Directory
