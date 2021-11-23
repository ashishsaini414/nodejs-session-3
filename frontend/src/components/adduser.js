import { useState } from "react"
import { Fragment } from "react/cjs/react.production.min"
import classes from './adduser.module.css'
const AddUser = (props) =>{
    const [inputState, setInputState]= useState('')
    const [isUserAdded, setIsUserAdded] = useState(false)
    const addUserHandler = (event) => {
        setInputState(event.target.value)
    }
    const clickHandler = () => {
        fetch("/adduser",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({id: Math.random(), name: inputState})
        }).then(response => response.json()).then(data => props.onAddUser(data))
        setIsUserAdded(true)
        setInputState('')
    }
    const formHandler = (event) => {
        event.preventDefault(); 
    }
    return <Fragment>
        <form onSubmit={formHandler} className={classes.myform}>
            <h2> Add New User</h2>
            <input text="type" onChange={addUserHandler} value={inputState}></input>
            <button onClick={clickHandler} className={classes.addbutton}>Add</button>
        </form>
        {isUserAdded && <p><b>User Added Successfully</b> <p>Goto Home page for complete users list</p></p>}
    </Fragment>
}

export default AddUser;