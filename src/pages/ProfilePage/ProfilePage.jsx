import React from 'react'
import Profile from '../../components/profile/Profile'
import { useAuth } from '../../hooks/useAuth'

const ProfilePage = () => {
    // const user = {
    //     name: 'Juan Ramirez',
    //     username: 'juanito',
    //     email: 'jramirez@gmail.com',
    //     photo: 'https://picsum.photos/200/300',
    //   }

			const { user } = useAuth();
  
    return (
      <>
        <Profile user={ user }/>
      </>
    )
}

export default ProfilePage