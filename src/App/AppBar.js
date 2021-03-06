import React from 'react';
import styled, {css} from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
    font-size: 1.2em;
`
const Bar = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto; 
`
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css `
        text-shadow: 0px 0px 60px #03ff03;
    `}
    ${props => props.hidden && css `
        display: none;
    `}

`
function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}){
    return (
        <AppContext.Consumer>{({page, setPage, firstVisit})=> (
            <ControlButtonElem 
                active={page === name} 
                onClick={()=>setPage(name)}
                hidden={firstVisit && name === 'dashboard'}>
                {toProperCase(name)}
            </ControlButtonElem>
        )}
        </AppContext.Consumer>
        
    );
}

export default function(){
   return (
    <Bar> 
        <Logo> CryptoDash </Logo> 
        <div></div>
        <ControlButton active name="dashboard"/> 
        <ControlButton name="settings"/>
    </Bar>
   ); 
}