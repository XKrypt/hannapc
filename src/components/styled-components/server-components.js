import styled from 'styled-components'

export const ServerConfigsContainer = styled.div`
    display: block;
    justify-content: space-evenly ;
    flex-wrap: wrap ;
    padding: 15px ;
    width: 80%;
`

export const ServerConfigItem = styled.div`

`
export const ServerConfigsInputs = styled.div`
        width: 100%;
        max-width: 600px;
        padding: 20px 0px;
        display : flex;
        justify-content: space-around;
`

export const ServerConfigsInput = styled.input`
    margin: 5px;
    outline: none ;
    border: none ;
    background-color:  rgba(0,0,0,0) ;
    padding: 5px;
    border-bottom: 1px solid white;
    color: white ;
`
export const ServerConfigsLabel = styled.label`
    color: white;
`