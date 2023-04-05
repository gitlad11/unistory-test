import React from 'react'

function Input(props){
    
    return( 
        <div className='input'>
            <input type={props.hidden ? 'password' : 'email' } 
                    value={props.value} 
                    placeholder={props.placeholder} 
                    onChange={(event) => { props.onChange(event) }}/>
            <span style={{ fontSize: '15px', color: 'red' }}>{props.validation}</span>       
        </div>
    );
}
export default Input;