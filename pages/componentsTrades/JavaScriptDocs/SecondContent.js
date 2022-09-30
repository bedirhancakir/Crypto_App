import crypto from '../CssDocs/SecondContent.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SecondContent() {
    const router = useRouter()
    return (
        <div className={crypto.second_content}>
            <Tabs className={crypto.change_screen}>
                <TabList className={crypto.buttons}>
                    <Tab className={crypto.tab_button}>Open Order</Tab>
                    <Tab className={crypto.tab_button}>Order Books</Tab>
                    <Tab className={crypto.tab_button}>Market Trades</Tab>
                </TabList>

                <TabPanel className={crypto.change_content}>
                <div className={crypto.table}>
                        <div className={crypto.column_1}>
                            <div className={crypto.column_title}>
                                Bid
                            </div>
                            <div className={crypto.table_text}>
                                <div className={crypto.text_column}>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>

                                </div>
                                <div className={crypto.green_text_column}>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                </div>
                            </div>
                        </div>
                        <div className={crypto.column_2}>
                            <div className={crypto.column_title}>
                                Ask
                            </div>
                            <div className={crypto.table_text}>
                                <div className={crypto.text_column}>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>

                                </div>
                                <div className={crypto.red_text_column}>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                <div className={crypto.table}>
                        <div className={crypto.column_1}>
                            <div className={crypto.column_title}>
                                Bid
                            </div>
                            <div className={crypto.table_text}>
                                <div className={crypto.text_column}>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>

                                </div>
                                <div className={crypto.green_text_column}>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                </div>
                            </div>
                        </div>
                        <div className={crypto.column_2}>
                            <div className={crypto.column_title}>
                                Ask
                            </div>
                            <div className={crypto.table_text}>
                                <div className={crypto.text_column}>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>
                                    <span>27,486.39</span>

                                </div>
                                <div className={crypto.red_text_column}>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                    <span>2485.27</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                </TabPanel>
            </Tabs>
        </div>
    )
}