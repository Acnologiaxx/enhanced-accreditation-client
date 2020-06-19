import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket

const Chat = ({ location }) => {
    const ENDPOINT = 'localhost:5000'

    useEffect(()=>{
        socket = io(ENDPOINT)
        console.log(socket)
    },[])

    return (
        <div>
            Chat
        </div>
    )
}

export default Chat