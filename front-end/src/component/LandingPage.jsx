import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import VoiceRec from './voiceRec'
export default function LandingPage() {
  let [signUpNo,setSignUpNo] = useState(-1)
  const handelSignUpNo =(num)=>{
    setSignUpNo(num)
  }
  return (
    <div className='loginPage'>
        <img src="loginbg.jpg" alt="loginbg" className='loginBg'/>
        {/* <Login/> */}
        <SignUp signUpNo={signUpNo} handelSignUpNo={handelSignUpNo} />
        {/* <VoiceRec/> */}
    </div>
  )
}
