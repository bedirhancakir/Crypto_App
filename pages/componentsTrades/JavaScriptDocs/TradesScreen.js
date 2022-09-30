import crypto from '../CssDocs/TradesScreen.module.css'
import FirstContent from './FirstContent'
import SecondContent from './SecondContent'
import TradingBar from './TradingBar'
import HomeNavigation from '../../componentsHomeScreen/JavaScriptDocs/HomeNavigation'

export default function TradesScreen() {
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <div className={crypto.content_1}>
                    <FirstContent />
                </div>
                <div className={crypto.trading_bar}>
                    <TradingBar />
                </div>
                <div className={crypto.content_2}>
                    <SecondContent />
                </div>
                <div className={crypto.main_navigation}>
                    <HomeNavigation/>
                </div>
            </div>
        </div>
    )
}