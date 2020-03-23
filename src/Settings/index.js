import React from 'react'
import WelcomeMesage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from "../Shared/Page";
import CoinGrid from './CoinGrid';

export default function() {
    return (
    <Page name="settings">
        <WelcomeMesage/>
        <CoinGrid topSection/>
        <ConfirmButton/>
        <CoinGrid/>
    </Page>)
}