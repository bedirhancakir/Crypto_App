import crypto from '../CssDocs/MarketScreen.module.css'
import Header from '../../componentsHomeScreen/JavaScriptDocs/HomeHeader'
import MarketTabMenu from './MarketTabMenu'
import MainNavigation from '../../componentsHomeScreen/JavaScriptDocs/HomeNavigation'

export default function MarketScreen() {
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>

                <div className={crypto.header}>
                    <Header />
                </div>
                <div className={crypto.tab_menu}>
                    <MarketTabMenu />
                </div>
                <div className={crypto.main_navigation}>
                    <MainNavigation />
                </div>
            </div>
        </div>
    )
}