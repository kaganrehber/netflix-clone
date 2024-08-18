import GetStarted from "../../ui/get-started";
import TV from "../../ui/tv";
import GreyLine from "../../ui/grey-line";
import Download from "../../ui/download";
import WatchEverywhere from "../../ui/watch-everywhere";
import Kids from "../../ui/kids";
import FAQ from "../../ui/FAQ";
import "../../ui/styles/page.css";

export default function Home() {
  return (
    <>
      <div className="main-page">
        <GetStarted />
        <GreyLine />
        <TV />
        <GreyLine />
        <Download />
        <GreyLine />
        <WatchEverywhere />
        <GreyLine />
        <Kids />
        <GreyLine />
        <FAQ />
      </div>
    </>
  );
}
