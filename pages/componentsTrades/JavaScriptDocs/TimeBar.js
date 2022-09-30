import crypto from '../CssDocs/TimeBar.module.css'
import { useRouter } from 'next/router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function TimeBar() {
    const router = useRouter()
    return (
        <div className={crypto.time_bar}>
              <Tabs className={crypto.change_screen}>
                    <TabList className={crypto.buttons}>
                        <Tab className={crypto.tab_button}>1m</Tab>
                        <Tab className={crypto.tab_button}>5m</Tab>
                        <Tab className={crypto.tab_button}>15m</Tab>
                        <Tab className={crypto.tab_button}>15m</Tab>
                        <Tab className={crypto.tab_button}>1d</Tab>
                        <Tab className={crypto.tab_button}>More</Tab>
                    </TabList>

                </Tabs>
    
        </div>
    )
}