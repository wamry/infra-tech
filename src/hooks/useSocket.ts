import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false)
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL)

    const handleConnect = () => setIsConnected(true)
    const handleDisconnect = () => setIsConnected(false)
    const handleEventData = (data: any) => setUserList(data?.reverse())

    socket.on('connect', handleConnect)
    socket.on('disconnect', handleDisconnect)
    socket.on('data', handleEventData)

    return () => {
      socket.off('connect', handleConnect)
      socket.off('disconnect', handleDisconnect)
      socket.off('data', handleEventData)
    }
  }, [])

  return {
    isConnected,
    userList,
  }
}
