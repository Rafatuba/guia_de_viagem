import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CarImage from "../../assets/t-cross.png";

export default function CardHome() {
  return (
    <Card
      sx={{
        width: "100%",
        height: 300,
        borderRadius: 5,
        position: "relative",
      }}
    >
      <CardMedia
        image={CarImage}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          filter: "brightness(60%)",
        }}
      />
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
                lineHeight: 1,

                mb: "1rem",
              },
            }}
          >
            <h2>
              Campo Grande
              <br />
              →
              <br />
              Goiânia
            </h2>
            <p>Uma viagem tranquila e segura</p>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
