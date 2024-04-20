import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const Chat = () => {
  return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader/>
        {/* chatMessage */}
        <div className="chatMessage">message</div>
        {/* chatInput */}
        <div className="chatInput">
            <AddCircleOutlineIcon/>
            <form>
                <input type='text' placeholder="Udemyへのメッセージ送信"/>
                <button type='submit' className='chatInputbutton'>送信</button>
            </form>

            <div className="chatInputIcon">
                <CardGiftcardIcon/>
                <GifIcon/>
                <EmojiEmotionsIcon/>
            </div>
        </div>
    </div>
  )
}

export default Chat