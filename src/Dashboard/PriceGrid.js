import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import PriceTile from './PriceTile';

const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 12px;
    margin-top: 33px;
`

export default function() {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map((price, index) => <PriceTile index={index} price={price}/>)}
                </PriceGrid>
            )}

        </AppContext.Consumer>
    )

}