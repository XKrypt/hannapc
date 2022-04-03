import styled from "styled-components";

export const Aplication = styled.div`
        display: flex;
        width: 100%;
`

export const AppContainer = styled.div`
    margin: 15px 25px ;
    border: 2px solid #3e86b1 ;
    padding: 5px ;
    float:left;
    border-radius: 7px;
    max-height : 450px;
    width: 350px;
    display: flex;
    flex-wrap: wrap ;
    overflow: auto ;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #CCC;
        border-radius: 5px;
    }
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