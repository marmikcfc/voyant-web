import React, { Component, useState } from "react";
import styled from "styled-components";
import { logout, isLogin } from "../utils";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const Wrapper = styled.nav`
  height: 100%;
`;

  


const SideNav = props => {
  const handleLogout = () => {


    console.log("QQQQ")
    logout();
    };

  return (


    <List>


          <ListItem button>
            <ListItemText onClick={() => props.selectView("MyAccount")} primary="Account" />
          </ListItem>

     
           <ListItem button>
            <ListItemText onClick={() => props.selectView("Notifications")} primary="Notifications" />
          </ListItem>

          <ListItem button>
            <ListItemText onClick={() => props.selectView("UserReport")} primary="User Reports" />
          </ListItem>

          <ListItem button>
            <ListItemText onClick={() => props.selectView("HashtagReport")} primary="Hashtag Reports" />
          </ListItem>



        <ListItem button>
          <Link to="/signin" onClick={() => handleLogout()}>
            <ListItemText  primary="Logout" />
          </Link>
          </ListItem>

    </List>



  );
};

export default SideNav;
