import Link from "next/link";
import Image from "next/image";
import buyMeACoffeeImg from "../public/bmc-button.png";

function BuyMeACoffeeButton() {
  return (
    <>
      <Link href="https://www.buymeacoffee.com/davidvh462">
        <a target="_blank">
          <Image
            style={{ height: "50px" }}
            src={buyMeACoffeeImg}
            alt="Buy Me A Coffee"
          />
        </a>
      </Link>
    </>
  );
}

export default BuyMeACoffeeButton;
