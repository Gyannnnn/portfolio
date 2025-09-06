import React from 'react'
import { auth } from '@/auth';
import EditAboutPage from './EditAboutDrawer';

export default async function EditAbout() {
  try {
      const session = await auth();
      const user = session?.user;
      const token = session?.user.jwt_token;
      const userId = user?.id;
      const role = user?.role;
      console.log(role);
      if (user) {
        return (
          <div>
            <EditAboutPage
              role={role as string}
              token={token as string}
              
            />
          </div>
        );
      }
    } catch (error) {
      return 
    }
}
