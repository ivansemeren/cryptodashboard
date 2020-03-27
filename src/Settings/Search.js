import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from "../Shared/Styles";
import {AppContext} from "../App/AppProvider";
import _ from 'lodash';
//import fuzzy from 'fuzzy';
var fuzzy = require('fuzzy');

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`

const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1px solid;
    height: 25px;
    color: #1163c9;
    place-self: center left;
`
const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
    console.log(inputValue);
    console.log(coinList);
    let coinSymbols = Object.keys(coinList);
    console.log(coinSymbols);
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    let allStringsToSearch = coinSymbols.concat(coinNames);
    // console.log(allStringsToSearch);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);
    //console.log(fuzzyResults);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });

    setFilterCoins(filteredCoins);

    //console.log(filteredCoins);

}, 500);

function filterCoins(e, setFilterCoins, coinList) {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilterCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilterCoins);
}

export default function() {
    return (
    <AppContext.Consumer>
        {({setFilterCoins, coinList}) =>
            <SearchGrid>
                <h4>Search all coins</h4>
                <SearchInput onKeyUp={(e) => filterCoins(e, setFilterCoins, coinList)} />
            </SearchGrid>
        }
    </AppContext.Consumer> 
    ); 
}