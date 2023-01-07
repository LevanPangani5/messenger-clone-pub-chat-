import React , {useState , useEffect}from 'react';
import {msgsCollectionRef}from './firebase';
import { getDocs,addDoc, serverTimestamp, orderBy, query} from 'firebase/firestore';
import { FormControl, Input, InputLabel} from '@mui/material'
import './App.css';
import Message from './Message';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import FlipMove from 'react-flip-move';

function App() {
  
  const [input, setInput] =useState('');
  const[userName,setUserName]=useState('');
  const [messages,setMessages]= useState([]);

  useEffect(()=>{
    setUserName(prompt("enter username: "));
  },[])

  useEffect(()=>{
    const getMsgs = async()=>{
      const q = query(msgsCollectionRef, orderBy("timeStamp","desc"));
      const data = await getDocs(msgsCollectionRef,q);
      setMessages(data.docs.map((doc)=>({
        ...doc.data(), id:doc.id
      })))
    }
   getMsgs();
 },[input])
  const sendMessage= async (e)=>{
   e.preventDefault();
  await addDoc(msgsCollectionRef , {msg:input, userName:userName , timeStamp: serverTimestamp()});
  setInput('');
  }
  return (
    <div className="App">
    <form className="app__form">
      <FormControl >
        <InputLabel htmlFor="my-input">Enter message</InputLabel>
        <Input value={input} onChange={e=> setInput(e.target.value)}/>
        <IconButton disabled={!input} variant ="contained" color="primary" onClick={sendMessage}><SendIcon/></IconButton>
     </FormControl>
    </form>
  <FlipMove>
     {
      messages.map((id, msg)=>(
         <Message key={id} msg={msg} name={userName}/>
       ))
     } 
   </FlipMove>
    </div>
  );
}

export default App;
