import crypto from '../CssDocs/Trade.module.css'
import Image from 'next/image'

export default function Common() {
    return (
        <div className={crypto.trade}>
            <span className={crypto.trade_title}>Trade</span>
            <div className={crypto.rows}>
                <div className={crypto.row_1}>
                    <div className={crypto.trade_icon}>
                        <Image
                            src="/SvgMenu/Trade-1.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.trade_icon}>
                        <Image
                            src="/SvgMenu/Trade-2.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.trade_icon}>
                        <Image
                            src="/SvgMenu/Trade-3.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.trade_icon}>
                        <Image
                            src="/SvgMenu/Trade-5.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                </div>
                <div className={crypto.row_2}>
                    <div className={crypto.trade_icon}>
                        <Image
                            src="/SvgMenu/Trade-4.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                </div>
            </div>
        </div>
    )
}