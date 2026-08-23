import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardHomeTriplo() {
  return (
    <div className="flex items-center justify-around gap-2 w-full m-auto">
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 3,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            840 km
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Distância
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 3,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            ~12h
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Tempo
          </Typography>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 3,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>3</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Passageiros
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
