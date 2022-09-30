import crypto from '../CssDocs/MarketTabMenu.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useRouter } from 'next/router';
import { CartProvider } from 'react-use-cart';
import Cart from './Cart'
import AddFavorite from './AddFavorite'

export default function MarketTabMenu() {
    return (

        <div className={crypto.tab_menu}>
            <Tabs className={crypto.change_screen}>
                <TabList className={crypto.buttons}>
                    <Tab className={crypto.tab_button}>Convert</Tab>
                    <Tab className={crypto.tab_button}>Spot</Tab>
                    <Tab className={crypto.tab_button}>Margin</Tab>
                    <Tab className={crypto.tab_button}>Fiat</Tab>
                </TabList>
                <TabPanel className={crypto.change_content}>
                    <div className={crypto.Home}>
                        <CartProvider>
                            <Cart />
                            <AddFavorite />
                        </CartProvider>
                    </div>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                </TabPanel>
                <TabPanel className={crypto.change_content}>
                </TabPanel>
            </Tabs>
        </div>
    )
}