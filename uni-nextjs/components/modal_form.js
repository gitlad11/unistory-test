import React, { useState } from "react";

function Modal_form(props){
    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.submit({ 'name' : name, 'link' : link })
    }
    
    return (
        <div className='modal-form' >
            <div  id="msform">
            <form >
            <fieldset>
                <h2 className="fs-title">Добавить книгу</h2>
                <input onChange={(event) => { setName(event.target.value) }} type="text" name="fname" placeholder="Название книги"/>
                <input onChange={(event) => { setLink(event.target.value) }} type="text" name="lname" placeholder="Ссылка на обложку книги"/>
                <input onClick={() => { props.close() }} type="button" name="Отмена" class="close action-button-close" value="Отмена"/>
                <input onClick={(event) => { handleSubmit(event) }} name="Подтвердить" class="submit action-button" value="Подтвердить"/>
            </fieldset>
        </form>
            </div>
        </div>
    )
}
export default Modal_form;