import React, {useEffect} from 'react'
import axios from 'axios'
// rfce
function LandingPage() {

    // axios는 ajax 같은 것으로 
    // /api/hello url을 통해 get방식으로 서버와 통신하면
    // 서버에서 client로 넘어온 response를 console.log로 찍어본다.
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            LandingPage!!
        </div>
    )
}

export default LandingPage
