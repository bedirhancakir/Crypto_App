import crypto from '../CssDocs/SlidingContent.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SlidingBuyButton from "./SlidingBuyButton";


export default function SlidingContentBuy() {

    return (
        <div className={crypto.content}>
            <Tabs className={crypto.change_screen}>
                <TabList className={crypto.buttons}>
                    <Tab className={crypto.tab_button}>Limit</Tab>
                    <Tab className={crypto.tab_button}>Market</Tab>
                    <Tab className={crypto.tab_button}>Stop Limit</Tab>
                </TabList>

                <TabPanel className={crypto.change_content}>
                <SlidingBuyButton/>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                    <SlidingBuyButton/>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                </TabPanel>
            </Tabs>
        </div>
    )
}