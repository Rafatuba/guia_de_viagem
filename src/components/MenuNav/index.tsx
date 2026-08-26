import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { CheckBox, Home, Map, Paid, Route } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function MenuNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Início"
          icon={<Home />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          label="Mapa"
          icon={<Map />}
          component={NavLink}
          to="/mapa"
        />
        <BottomNavigationAction
          label="Rota"
          icon={<Route />}
          component={NavLink}
          to="/rota"
        />
        <BottomNavigationAction
          label="Custos"
          icon={<Paid />}
          component={NavLink}
          to="/custos"
        />
        <BottomNavigationAction
          label="Checklist"
          icon={<CheckBox />}
          component={NavLink}
          to="/checklist"
        />
      </BottomNavigation>
    </Box>
  );
}
