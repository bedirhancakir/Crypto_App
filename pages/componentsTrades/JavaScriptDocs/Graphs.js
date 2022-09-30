import crypto from '../CssDocs/Graphs.module.css'
import React  from "react";
import { useRouter } from 'next/router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Graphs() {
    const router = useRouter()
    return (
        <div className={crypto.graphs}>
            <div className={crypto.tab_nav}>
                <Tabs className={crypto.change_screen}>
                    <TabList className={crypto.buttons}>
                        <Tab className={crypto.tab_button}>Convert</Tab>
                        <Tab className={crypto.tab_button}>Spot</Tab>
                        <Tab className={crypto.tab_button}>Margin</Tab>
                        <Tab className={crypto.tab_button}>Fiat</Tab>
                    </TabList>

                    <TabPanel className={crypto.change_content}>
                        <div className={crypto.content}></div>
                    </TabPanel>
                    <TabPanel className={crypto.change_content}>
                    </TabPanel>
                    <TabPanel className={crypto.change_content}>

                    </TabPanel>
                    <TabPanel className={crypto.change_content}>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}