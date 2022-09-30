import React from 'react';
import crypto from '../CssDocs/Account.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SignInEmail from './SignInEmail';
import SignUpEmail from './SignUpEmail';
import Image from 'next/image';

export default function EmailAccount() {

    return (

        <div className={crypto.all_page}>
            <tab></tab>
            <div className={crypto.container}>
                <div className={crypto.account_background}>
                    <Image
                        src="/ImagesAccount/ConstBackground.png"
                        width={414}
                        height={414} />
                </div>
                <div className={crypto.header}>
                    <div className={crypto.close_icon}>
                        <Image
                            src='/SvgAccount/close.svg'
                            width={24}
                            height={24} />
                    </div>
                </div>
                <Tabs className={crypto.change_screen}>
                    <TabList className={crypto.change_buttons}>
                        <Tab className={crypto.change_button}>Sign in</Tab>
                        <Tab className={crypto.change_button}>Sign up</Tab>
                    </TabList>

                    <TabPanel className={crypto.change_content}>
                        <div className={crypto.content}>
                            <SignInEmail />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={crypto.content}>
                            <SignUpEmail />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
