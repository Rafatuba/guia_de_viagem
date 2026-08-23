import CardHome from "../../components/CardHome";
import CardHomeTriplo from "../../components/CardHomeTriplo";
import CardInfoCar from "../../components/CardInfoCar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-16">
      <CardHome />
      <CardHomeTriplo />
      <CardInfoCar />
    </div>
  );
}
