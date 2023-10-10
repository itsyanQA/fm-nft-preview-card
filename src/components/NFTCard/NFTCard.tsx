import "./NFTCard.scss";
import Equilibrium from "../../assets/images/image-equilibrium.jpg";
import NFTDetails from "../NFTDetails/NFTDetails";
import HorizontalLine from "../UI/HorizontalLine/HorizontalLine";
import NFTCreator from "../NFTCreator/NFTCreator";
import { ReactComponent as ViewIcon } from "../../assets/svgs/icon-view.svg";
import { useState } from "react";
import CodedBy from "../CodedBy/CodedBy";

export default function NFTCard() {
  const [isImgHover, setIsImgHover] = useState<boolean>(false);

  return (
    <>
      <div className="nft">
        <div
          onMouseEnter={() => setIsImgHover(true)}
          onMouseLeave={() => setIsImgHover(false)}
          className="nft__image"
        >
          {isImgHover && <ViewIcon className="nft__view-icon" />}
        </div>
        <h1 className="nft__title">Equilibrium #3429</h1>
        <p className="nft__description">
          Our Equilibrium collection promotes balance and calm
        </p>
        <NFTDetails />
        <HorizontalLine />
        <NFTCreator />
      </div>
      <CodedBy />
    </>
  );
}
