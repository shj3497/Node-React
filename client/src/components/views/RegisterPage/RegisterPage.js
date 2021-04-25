import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_actions'
import {withRouter} from 'react-router-dom'

function RegisterPage(props) {
    const dispatch = useDispatch();


    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Password_Chk, setPassword_Chk] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onPassword_ChkHandler = (event) => {
        setPassword_Chk(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email:Email,
            name:Name,
            password:Password
        }

        if(Password !== Password_Chk){
            return alert("비밀번호를 확인해 주세요");
        }

        // Redux를 안쓴다면 이렇게 진행하겠지만 Redux를 공부하는 과정으로
        // dispatch를 이용해 _reducers로 보냈다.
        // axios.post('/api/users/login', body)
        // .then(response)

        dispatch(registerUser(body)).then(response => {
            if(response.payload.success){
                props.history.push("/login");
            } else{
                alert('Failed to sign up')
            }
        })
    }
    return (
        <div style={{display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center',
                    width:'100%',
                    height:'100vh'
        }}>
            <form style={{display:'flex', flexDirection:'column'}} 
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="text" value={Email} onChange={onEmailHandler}/>

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <input type="password" value={Password_Chk} placeholder="Password Check" 
                        onChange={onPassword_ChkHandler} style={{margin:'10px 0px'}}/>
                
                
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
