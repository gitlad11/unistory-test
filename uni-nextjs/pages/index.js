import styles from '../styles/Home.module.css'
import Login from './login/login'
import { useSelector } from 'react-redux'
import Main from './main'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from '../store/index';

export default function Home() {
  
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addUser, removeUser } = bindActionCreators(userActions, dispatch)

  const authentication = async () => {
    var token = localStorage.getItem('token')
    if(token){
      var user = await axios.post('http://localhost:3000/user/authentication', { 'token' : token },{
        'Content-Type': 'application/json',
        })

      if(user.data.email){
          await addUser(user.data)
          console.log(state)
      }
    }
  }

  useEffect(() => {
    authentication()
  },[])

  return (
    <>
      <div className={styles.container}>
        {!state.user.email ? <Login/> : <Main/>}
      </div>
    </>
  )
}
