import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import"./EmailList.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';


function EmailList () {
    return (
    <div className="emailList">
        <div className="emailList-settings">
            <div className="emailList-settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className="emailList-settingsLeft">
            <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
        </div>
        <div className="emailList-sections">
            <Section Icon = {InboxIcon} title="Primary" color="red" selected/>
            <Section Icon = {PeopleIcon} title="Social" color="blue" />
            <Section Icon = {LocalOfferIcon} title="Promotions" color="green" />
        </div>
        <div className="emailList-list">
            <EmailRow title="FlipKart" subject = "Sunday Offer" description="TestMail"
            time="1:40"
            />
        </div>
        <div className="emailList-list">
            <EmailRow title="WhatsApp" subject = "New Login" description="TestMailTestMailTestMailTestMailTestMailTestMailTestMail"
            time="1:10"
            />
        </div>
        <div className="emailList-list">
            <EmailRow title="Firebase" subject = "Welcome" description="TestMail"
            time="1:20"
            />
        </div>
        <div className="emailList-list">
            <EmailRow title="Twitch" subject = "Hello Streamer" description="TestMail"
            time="1:30"
            />
        </div>
    </div>
    );
}


export default EmailList;