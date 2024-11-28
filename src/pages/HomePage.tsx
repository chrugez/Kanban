import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAuth } from '../redux/reducer/authReducer'

const HomePage = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(removeAuth({}))
  }
  return (
    <Button onClick={handleLogout}>Logout</Button>
  )
}

export default HomePage