import { Button } from 'antd'
import React from 'react'

const SocialLogin = () => {
  return (
    <div className='mt-4 w-full'>
      <Button className='w-full' icon={<img src="src/assets/Icon_Google.png" alt="icon_google" />} size='large'>
        Sign in with Google
      </Button>
    </div>
  )
}

export default SocialLogin