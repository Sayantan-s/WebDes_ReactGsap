import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
       <Foo>
          <h2>Minimalism</h2>
       </Foo>
    )
}

const Foo = styled.footer`
text-transform: uppercase;
justify-self:center;
overflow: none;
align-self: flex-end;
margin:0;
padding: 0;
h2{
    margin: 0;
    padding: 0;
    font-size: 16vmax;
}
`
export default Footer
