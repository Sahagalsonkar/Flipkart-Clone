import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    left: -7,
    right:15,
    top:-5,
    padding: "0 4px",
  }
}))(Badge);

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" style={{height:"15px", width:"15px", marginTop:5}} >
      <StyledBadge badgeContent={4} color="error">
        <ShoppingCartIcon style={{color:"white", marginRight:"5px"}} />
      </StyledBadge>
    </IconButton>
  );
}
