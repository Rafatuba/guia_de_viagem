import { DirectionsCar } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardInfoCar() {
  return (
    <div className="flex items-center justify-around gap-2 w-full m-auto">
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "30px",
          borderRadius: 3,
          backgroundColor: "#f8fafc",
        }}
      >
        <CardContent>
          <DirectionsCar sx={{ fontSize: "40px", color: "#0d3c76ff" }} />
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
            T-Cross Sense 200 TSI
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Velocidade planejada: 90 km/h
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Consumo estimado: 13 km/L
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
