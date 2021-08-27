import { ICard } from "./iCard";

const CardComponent =(props: {card: ICard}) => {
  const { card } = props; //destructure card from props
  return (
    <div className="card">
      <div className="title">
        
      </div>
    </div>
  )
};

export default CardComponent;