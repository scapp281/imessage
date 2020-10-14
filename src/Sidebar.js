import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewTwoToneIcon from '@material-ui/icons/RateReviewTwoTone';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function Sidebar() {

  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      
      <div className="sidebar__header">
        <Avatar onClick={ () => auth.signout() } src={user.photo} className="sidebar__avatar" />
        <div className="sidebar__input">
            <SearchIcon />
            <input placeholder="search" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
            <RateReviewTwoToneIcon />
        </IconButton>
      </div>
      
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
