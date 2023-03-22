import Link from "next/link";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      <Spotlight pieces={pieces} />
    </>
  );
}
