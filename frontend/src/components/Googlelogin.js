import React from 'react'
import GoogleLogin from "react-google-login"
const googlelogin = () => {
   const  responseSuccessGoogle=(response)=>{
console.log(response)
    }
   const responseErrorGoogle=(response)=>{
    console.log(response)
    }
  return (
    <div>
       <GoogleLogin
    clientId="339421103788-ck9hfp8mgavtd8lqrufm20fbad71ebjb.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseSuccessGoogle
    }
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default googlelogin
