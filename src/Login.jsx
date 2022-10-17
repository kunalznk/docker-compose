import { useState } from "react"
import axios from "axios"

const Login = () => {

    const [login ,setLogin] = useState({
        email:"",
        password:""
    })

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]:[e.target.value]
        })
    }

    const onClick = async () => {
        try {
            if(login.email && login.password) {
                console.log(process.env)
                const resp = await axios.post(`http://auth-service:8081/api/v1/authenticate` , login);
                alert(JSON.stringify(resp.data));
    
            } else {
                alert("Login and Password is require");
            }
        } catch (error) {
            alert(JSON.stringify(error))
        }
        
    }
    return (
    <div style={{display:"flex" , flexDirection:"column" ,height:300}}>
        <input placeholder="email" name="email" type="email" onChange={(e) => onChange(e)}>
        </input>
        <input placeholder="password" name="password" type="password" onChange={(e) => onChange(e)}>
        </input>
        <button onClick={async () => await onClick()}>
            Login
        </button>
    </div> )
}

export default Login