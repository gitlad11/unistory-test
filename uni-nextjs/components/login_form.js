import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import Loader from "./loader";
import axios from "axios";
import * as crypto from 'crypto-js';

function Login_form(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailValidation, setEmailValidation] = useState('')
    const [passwordValidation, setPasswordValidation] = useState('')
    const [loginType, setLoginType] = useState(false)
    const [fetching, setFetching] = useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLoginType = () => {
        setLoginType(!loginType)
    }

    //хотел инициализовать клиента отдельно выдает ошибку
    const handleRegister =  async () => {
       var valid = await validate();
       if(valid && email.length > 4){
            setFetching(true) 
            var data = await axios.post('http://localhost:3000/user', { 'email' : email, 'password' : password, 'abonement' : {} }, {
            'Content-Type': 'application/json',
            })
            setFetching(false) 
            if(!data.data.error){
                localStorage.setItem('token', data.data.token)
                window.location.reload()
            } else {
                window.alert(data.data.error)
                props.createNotification(data.data.error)
            }
       }
    }

    const handleLogin = async () => {
        var valid = await validate();
        if(valid){
            setFetching(true)
            const crypt_password = crypto.AES.encrypt(password, 'secret-key').toString();
            var data = await axios.post('http://localhost:3000/user/login', { 'email' : email, 'password' : crypt_password, 'abonement' : {} })
            setFetching(false)
            if(!data.data.error){
                localStorage.setItem('token', data.data.token)
                window.location.reload()
            } else {
                window.alert(data.data.error)
                props.createNotification(data.data.error)
            }
        }
    }
    //Нужно прикрутить валидацию, не работает setState
    const validate = async () => {
    
        if(!email.includes('@')){
            setEmailValidation('Не правильный email адресс')
        } else {
            setEmailValidation('')
        }
        if(!password.length > 10){
            setPasswordValidation('Пароль должен быть длинее 10 символов')
        } else {
            setPasswordValidation('')
        }
        if(!emailValidation.length > 0 && !passwordValidation.length > 0){
            return true;
        } else {
            return false;
        }
    }

    return(
        <div className="login_form" >
            {!fetching ?
                   <>
                   <h5 className="login-title">
                       {!loginType ? 'Вход' : 'Регистрация'}
                   </h5>
                   <Input validation={emailValidation} onChange={ handleEmail } value={email} placeholder={'email'}/>
                   <Input validation={passwordValidation} onChange= { handlePassword } value={password} placeholder={'Пароль'} hidden/>
                   <div style={{ width: '100%', marginBottom: '5px' }}>
                       <Button onclick={loginType ? handleRegister : handleLogin} name={"Подтвердить"}/>
                   </div>
                   <span className="login-type" onClick={handleLoginType}>{loginType ? 'Вход' : 'Регистрация'}</span>  
                   </>
            :  <div style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                    <Loader/>
                </div>
            }
        </div>
    )
}
export default Login_form;