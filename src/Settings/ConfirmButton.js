import React from 'react';
import {AppContext} from "../App/AppProvider";
import styled from 'styled-components';
import {color3, greenBoxShadow} from "../Shared/Styles"

const ConfirmedButtonStyled = styled.div`
   margin: 20px;
   color: ${color3}; 
   cursor: pointer;
   padding: 5px;
   &:hover {
       ${greenBoxShadow}
   }
`

export const CenterDiv = styled.div`
    display:grid;
    justify-content: center;
`

export default function() {
    return (
        <AppContext.Consumer>
           {({confirmFavorites})=> 
                <CenterDiv>
                    <ConfirmedButtonStyled onClick={confirmFavorites}>
                    Confirm Favorites
                    </ConfirmedButtonStyled>
                </CenterDiv>
            } 
        </AppContext.Consumer>
    )
}