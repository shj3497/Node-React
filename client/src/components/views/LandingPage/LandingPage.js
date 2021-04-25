import React, {useEffect} from 'react'
import axios from 'axios'
// rfce
function LandingPage(props) {

    // axios는 ajax 같은 것으로 
    // /api/hello url을 통해 get방식으로 서버와 통신하면
    // 서버에서 client로 넘어온 response를 console.log로 찍어본다.
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const LoginPageGo = () => {
        
        props.history.push("/login")
    }

    const onClickHandler = () => {
        axios.get('/api/users/logout').then(response => {
            
            if(response.data.success){
                props.history.push("/login")
            }else{
                alert('로그인을 먼저하세요!')
            }
            console.log(response.data)
        })
    }


    return (
        <div style={{display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center',
                    width:'100%',
                    height:'100vh'
        }}>
            <h2>시작페이지</h2>
            
            <button onClick={LoginPageGo}>로그인</button>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage
