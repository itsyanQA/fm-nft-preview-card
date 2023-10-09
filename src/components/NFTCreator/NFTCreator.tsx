import CreatorIcon from "../../assets/images/image-avatar.png";
import "./NFTCreator.scss";

export default function NFTCreator() {
  return (
    <div className="nft-creator">
      <img src={CreatorIcon} alt="creator"/>
      <span className="nft-creator__text">
        Creation of <b>Jules Wyvern</b>
      </span>
    </div>
  );
}
