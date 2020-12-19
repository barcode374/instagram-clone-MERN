import React from 'react'
import Nav from '../Components/Nav/Nav'
import UserDetails from '../Components/Profile/userDetails'

interface Props {}

function Profile(props: Props) {
    const {} = props

    return (
        <div>
        <Nav home={false} likes={false} profile={true} />
        <UserDetails />
        
        </div>
    )
}

export default Profile
