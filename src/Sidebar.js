import React from 'react';
import './Sidebar.css';
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NoteIcon from "@material-ui/icons/Note";

function Sidebar ()  {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />}className="sidebar-compose">Compose</Button>
            <SidebarOption Icon ={InboxIcon} Title="Inbox" number={54} selected="true"/>
            <SidebarOption Icon ={StarIcon} Title="Starred" number={54}/>
            <SidebarOption Icon ={AccessTimeIcon} Title="Snoozed" number={54}/>
            <SidebarOption Icon ={LabelImportantIcon} Title="Important" number={54}/>
            <SidebarOption Icon ={NearMeIcon} Title="Sent" number={54}/>
            {/* <SidebarOption Icon ={NoteIcon} Title="Drafts" number={54}/> */}
            <SidebarOption Icon ={ExpandMoreIcon} Title="More" number={54}/>
        </div>
    );
}

export default Sidebar;