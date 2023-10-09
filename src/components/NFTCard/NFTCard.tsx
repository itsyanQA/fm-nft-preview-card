import "./NFTCard.scss";
import Equilibrium from "../../assets/images/image-equilibrium.jpg";
import NFTDetails from "../NFTDetails/NFTDetails";
import HorizontalLine from "../UI/HorizontalLine/HorizontalLine";
import NFTCreator from "../NFTCreator/NFTCreator";

export default function NFTCard() {
  return (
    <div className="nft">
      <img src={Equilibrium} alt="equilibrium" />
      <h1 className="nft__title">Equilibrium #3429</h1>
      <p className="nft__description">
        Our Equilibrium collection promotes balance and calm
      </p>
      <NFTDetails />
      <HorizontalLine />
      <NFTCreator />
    </div>
  );
}
