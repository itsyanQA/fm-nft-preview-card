import "./NFTDetails.scss";
import { ReactComponent as ClockIcon } from "../../assets/svgs/icon-clock.svg";
import { ReactComponent as EtheriumIcon } from "../../assets/svgs/icon-ethereum.svg";

export default function NFTDetails() {
  return (
    <div className="nft-details">
      <div className="nft-details__eth-container">
        <EtheriumIcon />
        <span className="nft-details__eth-container__text">0.041 ETH</span>
      </div>

      <div className="nft-details__clock-container">
        <ClockIcon />
        <span className="nft-details__clock-container__text">3 days left</span>
      </div>
    </div>
  );
}
