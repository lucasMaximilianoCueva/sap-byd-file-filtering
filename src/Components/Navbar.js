/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import Box from "@mui/material/Box";
// import { BsCart2 } from "react-icons/bs";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../Assets/sap.ico";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  // const menuOptions = [
  //   {
  //     text: "Inicio",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     text: "Conocenos",
  //     icon: <InfoIcon />,
  //   },
  //   {
  //     text: "Testimonios",
  //     icon: <CommentRoundedIcon />,
  //   },
  //   {
  //     text: "Contacto",
  //     icon: <PhoneRoundedIcon />,
  //   },
  //   {
  //     text: "Hacé tu pedido",
  //     icon: <ShoppingCartRoundedIcon />,
  //   },
  // ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" width={50}/>
      </div>
      <div className="navbar-links-container">
        {/* <a href="">Inicio</a>
        <a href="#about">Conocenos</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#contacto">Contacto</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Pedido</button> */}
      </div>
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div> */}
      {/* <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer> */}
    </nav>
  );
};

export default Navbar;
