import crypto from '../CssDocs/HomeNavigation.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function HomeNavigation() {
    const router = useRouter()
    return (
        <div className={crypto.navigation_bar}>
            <div className={crypto.navigation}>
                <div
                    className={crypto.navigation_icon}
                    onClick={() => {
                        router.push('/componentsHomeScreen/JavaScriptDocs/HomeScreen')
                    }}>
                    <Image
                        src='/SvgHomeScreen/MainNavigation-1.svg'
                        width={24}
                        height={24}
                    />
                    <span className={crypto.icon_title}>Home</span>
                </div>
                <div 
                className={crypto.navigation_icon}
                onClick={()=>{
                    router.push('/componentsMarkets/JavaScriptDocs/MarketScreen')
                }}
                >
                    <Image
                        src='/SvgHomeScreen/MainNavigation-2.svg'
                        width={24}
                        height={24}
                    />
                    <span className={crypto.icon_title}>Markets</span>
                </div>
                <div 
                onClick={()=>{
                    router.push('/componentsTrades/JavaScriptDocs/TradesScreen')
                }}
                className={crypto.navigation_icon}>
                    <Image
                        src='/SvgHomeScreen/MainNavigation-3.svg'
                        width={24}
                        height={24}
                    />
                    <span className={crypto.icon_title}>Trades</span>
                </div>
                <div className={crypto.navigation_icon}>
                    <Image
                        src='/SvgHomeScreen/MainNavigation-4.svg'
                        width={24}
                        height={24}
                    />
                    <span className={crypto.icon_title}>Activity</span>
                </div>
                <div className={crypto.navigation_icon}>
                    <Image
                        src='/SvgHomeScreen/MainNavigation-5.svg'
                        width={24}
                        height={24}
                    />
                    <span className={crypto.icon_title}>Wallets</span>
                </div>
            </div>
        </div>
    )
}