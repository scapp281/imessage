import React, {useState} from 'react';
import './Chat.css';
import { IconButton } from '@material-ui/core';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';

function Chat() {
  const [input, setInput] = useState("");
    
  const sendMessage = e => {
      e.preventDefault();
      
      setInput("");
  }
  return (
    <div className="chat">
       <div class="chat__header">
            <h4>To: <span className="chat__name">Channel name</span></h4>
            <strong>Details</strong>
       </div>
       <div className="chat__messages">
           <h5>Chat messages</h5>
           <h5>Chat messages</h5>
           <h5>Chat messages</h5>
           <h5>Chat messages</h5>
       </div>
       <div className="chat__input">
            <form>
                <input value={ input } onChange={ (e) => setInput(e.target.value) } type="text" placeholder="Type Message"/>
                <button onClick={ sendMessage }>Send Message</button>
            </form>
            <IconButton>
                <SettingsVoiceIcon />
            </IconButton>
       </div>
    </div>
  );
}

export default Chat;
