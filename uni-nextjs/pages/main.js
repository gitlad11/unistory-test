import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import avatar from '../public/media/user.png';
import Button from "../components/button";
import Modal_form from "../components/modal_form";
import axios from 'axios'
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { bookActions } from "../store";
import { Container, Col } from 'react-bootstrap'

function Main(){
    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState(false)
    const [books, setBooks]= useState([])
    const [abon, setAbon] = useState(null)
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const methods = bindActionCreators(bookActions, dispatch)

    const addBook = async (book) => {
        var added = await axios.post('http://localhost:3000/books/new', { 'name': book['name'], 'preview': book['link'] })
        setModal(false)
        window.location.reload()
    }

    const getBooks = async () => {
        var books = await axios.get('http://localhost:3000/books')
        setBooks(books.data)
    }

    const getCart = async () => {
        var books = await axios.get('http://localhost:3000/order', null, { params: { email : state.user.email }})
        setBooks(books.data)
    }

    const addCart = async (book) => {
        var books = await axios.post('http://localhost:3000/order/add', { 'owner' : state.user.email, 'name' : book['name'], 'preview': book['preview'] })
        console.log(books)
    }

    const getAbon = async () => {
        var abon = await axios.post('http://localhost:3000/abonement', { 'owner' : state.user.email })
        if(abon.data.owner){
            setAbon(abon.data)
        } else {
            setAbon(null)
        }
    }

    const setAbonement = async () => {
        var abon = await axios.post('http://localhost:3000/abonement/add', { 'owner' : state.user.email, 'type': 1 })
        if(!abon.data.error){
            window.location.reload()
        }
    }

    const delAbonement = async () => {
        var result = await axios.post('http://localhost:3000/abonement/remove', { 'id' : abon.id, })
        if(!result.data.error){
            window.location.reload()
        }
    }

    const logOut = async () => {
        await localStorage.removeItem('token')
        window.location.reload()
    }

    useEffect(() => {
        getBooks()
        getAbon()
    }, [])

    useEffect(() => {
        if(cart){
          getCart()
        } else {
          getBooks()
        }
    }, [cart, setCart])

    return( 
        <div className="Main">
            <div className="navigation">
                
                <div className="user-container"> 
                    <div style={{ height: '40px', width: '40px' }}>
                        <Image alt="avatar" src={avatar} height={40}/>
                    </div>
                    <div style={{ margin : '5px' }}>
                    {state.user.email}
                   
                    </div>
                    <div style={{ marginTop: '-10px',  width: '100%', alignItems: "start", justifyContent: 'start' }} >
                       {abon == null ? <Button onclick={setAbonement} name={'оформить абонемент'}/> :
                                          <Button onclick={delAbonement} name={'удалить абонемент'}/>}
                        <Button onclick={logOut} name={'Выйти'} />
                    </div>
                </div>
                <h3>{cart ? 'Корзина' : 'Каталог' }</h3>
                <div>
                    <Button onclick={() => { setModal(true) }} name={'добавить книгу'}/>
                    <Button onclick={() => { setCart(!cart) }} name={!cart ? 'Корзина' : 'Каталог'}/>
                </div>
            </div>
            <Container className="book-list">
            {books.map(function(item, i){
                return<Col key={i} xs={6} style={{alignItems: 'center'}}> 
        
                        <div className="book-card">
                            <img src={item.preview} height={300} width={300}/>
                            <h5>
                                {item.name}
                            </h5>
                        </div>
                        {!cart && abon && <Button onclick={() => { addCart(item) }} name={'В корзину'} />}
                    </Col> 
                    })
            }
            </Container>
            {modal && <Modal_form submit={addBook} close={() => { setModal(false) }}/> }
        </div>
    )
}

export default Main;
