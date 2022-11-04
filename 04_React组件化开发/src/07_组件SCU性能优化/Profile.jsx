import React, { memo } from 'react'

const Profile = memo((props) => {
  console.log('Profile render')
  return (
    <div>Profile Component: {props.counter}</div>
  )
})

export default Profile