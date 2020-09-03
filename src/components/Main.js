import React from 'react'
import styled from 'styled-components'

const Main = () => {
    return (
        <Middle>
            <img 
            src="https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Potrait" 
            />
        </Middle>
    )
}
const Middle = styled.main`
    justify-self: center;
    align-self: center;
    img{
        max-width: 470px;
        transform : translateY(2rem);
    }
`
export default Main

