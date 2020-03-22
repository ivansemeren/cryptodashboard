import React from 'react';
import styled from "styled-components";

export const CoinHeaderGridStyled = styled.div`
    display: grid;
    gris-template-columns: 1fr 1fr;
    font-size: 30px;
`

export const CoinSymbol = styled.div`
    justify-self: right;
`

export default function({name, symbol}) {
    return <CoinHeaderGridStyled>
            <div>{name}</div>
            <CoinSymbol> {symbol}</CoinSymbol>
    </CoinHeaderGridStyled>
}