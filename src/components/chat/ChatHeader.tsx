import React from 'react'
import './ChatHeader.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className="chatHeader">
        <div className="chatHeaderLeft">
            Hello
        </div>
        <div className="chatHeaderRight">
            <NotificationsIcon/>
            <PushPinIcon/>
            <PeopleAltIcon/>
            <div className="chatHeaderSearch">
                <input type="text" placeholder="Search"/>
                <SearchIcon/>
            </div>
            <SendIcon/>
            <HelpIcon/>

        </div>
    </div>
  )
}

export default ChatHeader