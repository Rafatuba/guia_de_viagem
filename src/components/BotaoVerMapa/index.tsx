import { Map } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function BotaoVerMapa() {
  return (
    <Button
      className="normal-case!"
      variant="contained"
      startIcon={<Map />}
      component={NavLink}
      to="/mapa"
      size="large"
      sx={{
        width: "100%",
        borderRadius: 5,
        padding: 1.5,
        fontSize: 18,
        fontWeight: 600,
      }}
    >
      Ver mapa
    </Button>
  );
}
