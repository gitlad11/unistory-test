import React, { useState } from "react";
import Login_form from "../../components/login_form";
import Image from 'next/image'
import lib from '../../public/media/libr.jpg';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Login(){
    const [loaded, setLoaded] = useState(false)

    const handleImage = () => {
        setLoaded(true)
    }

    const createNotification = (message) => {
        return () => {
            NotificationManager.warning(message);
        };
      };

    return (
        <div className="login">
            <Image alt="background" src={lib} fill onLoad={handleImage}/>
            <div style = {loaded ? { 'opacity' : '0.3' } : { 'opacity' : '1.0' }} className="shadow-bg">
            </div>
            <Login_form createNotification={createNotification}/>
            <NotificationContainer/>
        </div>
    )
}
export default Login;