import crypto from '../CssDocs/TradesHeader.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function TradesHeader() {
    const router = useRouter()
    return (
        <div className={crypto.header}>
            <div
                className={crypto.profile_icon}
                onClick={() => {
                    router.push('/componentsHomeScreen/JavaScriptDocs/ProfileScreen')
                }}>
                <Image
                    src="/SvgHomeScreen/ProfilePhoto.svg"
                    width={36}
                    height={36}
                />
            </div>
            <div className={crypto.trades_icon_1}>
                <Image
                    src='/SvgTrades/TradesHeader-1.svg'
                    width={36}
                    height={36}
                />
            </div>
            <div className={crypto.trades_icon_2}>
                <Image
                    src='/SvgTrades/TradesHeader-2.svg'
                    width={36}
                    height={36}
                />
            </div>
            <div className={crypto.trades_icon_3}>
                <Image
                    src='/SvgTrades/TradesHeader-3.svg'
                    width={36}
                    height={36}
                />
            </div>
        </div>
    )
}