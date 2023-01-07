import { Card, CardContent, Typography } from '@mui/material'
import React , {forwardRef} from 'react'
import './Message.css'

const Message=forwardRef(({msg,name,key},ref)=> {
    const isUser = name === msg.userName;
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
    <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
            <Typography 
            variant="h5"
            componeent="h2"
            >
             {msg.username}:{msg.msg}
            </Typography>
        </CardContent>
    </Card>
         </div>
  )
}
)

export default Message