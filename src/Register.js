import { useState } from "react"
import axios from "axios"

const Register = () => {

    const [register ,setRegister] = useState({
        email:"",
        password:"",
        role:"LEARNER"
    })

    const onChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]:[e.target.value]
        })
    }

    const onClick = async () => {

        try {
            if(register.email && register.password) {
                
                const resp = await axios.post(`http://${process.env.REACT_APP_SERVER_URL}/api/v1/addUser` , register);
                alert(JSON.stringify(resp.data));
    
            } else {
                alert("Login and Password is require");
            }
        } catch (error) {
            JSON.stringify(error)
        }
        
    }
    return (
    <div style={{display:"flex" , flexDirection:"column" , height:300}}>
        <input placeholder="email" name="email" type="email" onChange={(e) => onChange(e)}>
        </input>
        <input placeholder="password" name="password" type="password" onChange={(e) => onChange(e)}>
        </input>
        <input placeholder="role" name="role" type="text" onChange={(e) => onChange(e)}>
        </input>
        <button onClick={async () => await onClick()}>
            Register
        </button>
    </div> )
}

export default Register