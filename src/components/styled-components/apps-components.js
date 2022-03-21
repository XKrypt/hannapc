import styled from "styled-components";

export const AppContainer = styled.div`
    margin: 35px 35px ;
    border: 1px solid #FFF ;
    padding: 15px ;
    max-height: 250px;
    display: flex;
    flex-wrap: wrap ;
    overflow: auto ;
`


export const AppItem = styled.div`
    width: 120px ;
    display: flex ;
    flex-direction: column ;
    justify-content: center;
    margin: 3px;
`
export const AppIcon = styled.div`
    width:64px ;
    height:64px ;
    border-radius: 100% ;
    background-color: #CCC ;
    margin: auto;
`


export const AppName = styled.div`
    font-size: 21px ;
    font-weight: bold ;
    color: white;
    text-align: center ;
`



export const AppConfigs = styled.div`
    display: flex;
    justify-content: flex-start ;
    margin: 35px 35px ;
`

export const ButtonConfig = styled.button`
    display: flex;
    margin: 0px 5px ;
    border: none;
    padding: 8px;
    background-color: #005ca8;
    color: white ;
    cursor: pointer;
    transition: all 150ms ;
    border-radius: 5px;
    &:hover ${this} {
        background-color: #008afb;
    }
`