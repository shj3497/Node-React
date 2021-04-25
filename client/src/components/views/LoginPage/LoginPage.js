import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_actions'

function LoginPage(props) {
    const dispatch = useDispatch();


    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email:Email,
            password:Password
        }

        dispatch(loginUser(body)).then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/')
            } else{
                alert('Error')
            }
        })

        // Redux를 안쓴다면 이렇게 진행하겠지만 Redux를 공부하는 과정으로
        // dispatch를 이용해 _reducers로 보냈다.
        // axios.post('/api/users/login', body)
        // .then(response)
    }
    // react는 기본적 html속성을 제공을 안하는건가?
    // input태그에서 글자 입력은 당연한건데 이벤트를 따로 정의해줘야하네?
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

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <br />
                
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
