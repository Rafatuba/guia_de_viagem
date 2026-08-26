import BotaoVerMapa from "../../components/BotaoVerMapa";
import CardHome from "../../components/CardHome";
import CardHomeTriplo from "../../components/CardHomeTriplo";
import CardInfoCar from "../../components/CardInfoCar";
import TimelineHome from "../../components/Tmeline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-18 pb-20">
      <CardHome />
      <CardHomeTriplo />
      <CardInfoCar />
      <TimelineHome />
      <BotaoVerMapa />
    </div>
  );
}
