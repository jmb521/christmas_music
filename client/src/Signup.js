import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const history = useNavigate()
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({username, password})
        })
        .then(r => {
            if(r.ok) {
                r.json().then(r => {
                    setUser(r)
                    history("/")
                })
            } else {
                // ! check to make sure this is correct
                r.json().then(r => {
                    console.log("errors", r)
                    setErrors(r.errors)
                })
            }
        })
    }
    return(
        <div>
            {errors && errors.map(e => <p>{e}</p>)}
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="username" placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="text" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="submit" value="Signup" />
        </form>
        </div>
    )


}

export default Signup