import { DirectionsCar } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="flex items-center gap-2 text-2xl justify-center fixed top-0 left-0 w-full z-50 bg-slate-50 py-3 shadow-md h-16">
      <DirectionsCar sx={{ fontSize: "40px", color: "#0d3c76ff" }} />
      <h1 className="font-bold">Guia de Viagem</h1>
    </div>
  );
}
