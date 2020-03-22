import React from 'react'
import WelcomeMesage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from "../Shared/Page";

export default function() {
    return (
    <Page name="settings">
        <WelcomeMesage/>
        <ConfirmButton/>
    </Page>)
}