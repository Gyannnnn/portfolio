import { auth } from '@/auth'
import Profile from '@/Components/Profile'
import SigninForm from '@/Components/SigninForm';
import React from 'react'

export default async function page() {
  const session = await auth();
  return (
    <div className="container">
      <div className="contentContainer">
        {
          session?.user ? <Profile/> : <SigninForm/>
        }
      </div>
    </div>
  )
}
