import SignIn from '@/components/SignIn/SignIn'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "sigin | Bazarli24",
    description: "O'zbekistondagi birinchi raqamli online market",
  };
const SignInPage = () => {
  return (
    <div>
        <SignIn/>
    </div>
  )
}

export default React.memo(SignInPage)