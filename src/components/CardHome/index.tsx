import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CarImage from "../../assets/t-cross.png";

export default function CardHome() {
  return (
    <Card
      sx={{
        width: "100%",
        height: 300,
        borderRadius: 5,
        position: "relative",
        backgroundImage: `  linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)),
        url(${CarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "",

              color: "common.white",
              textAlign: "center",

              "& h2": {
                color: "#fff",
                fontSize: "1.8rem",
                fontWeight: 700,
                lineHeight: 1.3,

                mb: "1rem",
              },
            }}
          >
            <h2>
              Campo Grande
              <br />→ Goiânia
            </h2>
            <p>Uma viagem tranquila e segura</p>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
