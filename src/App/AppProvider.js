import React from 'react';
import _ from 'lodash';
const cc = require('cryptocompare');

const MAX_FAVORITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            setFilterCoins: this.setFilterCoins
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
        this.fetchPrices();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
        console.log(coinList);
    }

    fetchPrices = async () => {
        if(this.state.firstVisit) return;
        let prices = await this.prices();
        prices = prices.filter(price => Object.keys(price).length);
        console.log(prices);
        this.setState({prices});
    }

    // fetchPrices = async () => {
        //     if(this.state.firstVisit) return;
        //     let prices = await this.prices();
        //     // We must filter the empty price objects (not in the lecture)
        //     prices = prices.filter(price => Object.keys(price).length);
        //     this.setState({prices});
        //   }

    prices = async () => {
        
        let returnData = [];
        for(let i=0; i < this.state.favorites.length;i++) {
            try {
                let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
                returnData.push(priceData); 
            }
            catch (e) {
                console.warn('Fetch price error', e)
            }
        }
        return returnData;
    }

    addCoin = (key) => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites});
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)});
    }

    isInFavorites = (key) => _.includes(this.state.favorites, key)
    
    confirmFavorites = () => {
        console.log('Confirm');
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        }, () => {
           this.fetchPrices();
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites
        }));
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {page: 'settings', firstVisit: true}
        }
        let {favorites} = cryptoDashData;
        return {favorites};
    }

    setPage = page => {
        this.setState({page})
    }

    setFilterCoins = (filteredCoins) => this.setState({filteredCoins})

    render(){
        return(
           <AppContext.Provider value={this.state}>
               {this.props.children}
           </AppContext.Provider> 
        )
    }
}