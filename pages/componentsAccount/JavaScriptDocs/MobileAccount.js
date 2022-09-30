import React, { useState } from 'react';
import crypto from '../CssDocs/Account.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SignInMobile from './SignInMobile';
import { useRouter } from 'next/router';
import Image from 'next/image';



export default function MobileAccount() {
    const [isActive, setIsActive] = useState(true);
    const handleClick = () => {
        setIsActive(current => !current);
    };
    const router = useRouter()
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
                        <Tab className={crypto.change_button}
                            onClick={() => {
                                router.push('/componentsAccount/JavaScriptDocs/SignUpMobile')
                            }}>Sign up</Tab>
                    </TabList>

                    <TabPanel className={crypto.change_content}>
                        <div className={crypto.content}>
                            <SignInMobile />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}