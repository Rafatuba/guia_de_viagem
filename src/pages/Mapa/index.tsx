import { NavLink } from "react-router-dom";
import { LocationOn, LocationPin } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Mapa() {
  return (
    <div className="flex flex-col items-start justify-center gap-3 pt-16 pb-20">
      <h1 className="text-2xl font-bold">Mapa da rota</h1>
      <div className="bg-[url(./assets/mapa.png)] flex w-full h-screen bg-center bg-cover rounded-lg">
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: 250,
            height: 190,
            borderRadius: 3,
            backgroundColor: "#f8fafc",
            margin: 1.5,
            padding: 1,
            position: "relative",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",

              gap: 1,
              padding: 0,
            }}
          >
            <LocationOn sx={{ color: "green" }} />
            <Typography sx={{ fontWeight: 600 }}>Camapuã</Typography>
            <Typography sx={{ position: "absolute", right: 10 }}>
              145 km
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",

              gap: 1,
              padding: 0,
            }}
          >
            <LocationOn sx={{ color: "#0d3c76ff" }} />
            <Typography sx={{ fontWeight: 600 }}>Chapadão do Sul</Typography>
            <Typography sx={{ position: "absolute", right: 10 }}>
              330 km
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",

              gap: 1,
              padding: 0,
            }}
          >
            <LocationOn sx={{ color: "orange" }} />
            <Typography sx={{ fontWeight: 600 }}>Jataí</Typography>
            <Typography sx={{ position: "absolute", right: 10 }}>
              510 km
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",

              gap: 1,
              padding: 0,
            }}
          >
            <LocationOn sx={{ color: "purple" }} />
            <Typography sx={{ fontWeight: 600 }}>Rio Verde</Typography>
            <Typography sx={{ position: "absolute", right: 10 }}>
              645 km
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 1,
              padding: 0,
              paddingBottom: "0 !important",
            }}
          >
            <LocationOn sx={{ color: "red" }} />
            <Typography sx={{ fontWeight: 600, paddingBottom: 0 }}>
              Goiânia
            </Typography>
            <Typography sx={{ position: "absolute", right: 10 }}>
              840 km
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Button
        className="normal-case!"
        variant="outlined"
        startIcon={<LocationPin />}
        component={NavLink}
        to="https://maps.app.goo.gl/AZMhifniiab27xqb7"
        size="large"
        sx={{
          width: "100%",
          borderRadius: 5,
          padding: 1.5,
          fontSize: 18,
          fontWeight: 600,
          backgroundColor: "#f8fafc",
        }}
      >
        Navegar no Google Maps
      </Button>
    </div>
  );
}
