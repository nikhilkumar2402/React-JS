import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div>
      <h1 className='px-80 py-20 text-center'>User : {userid}</h1>
    </div>
  )
}

export default User
