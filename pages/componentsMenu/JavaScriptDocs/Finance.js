import crypto from '../CssDocs/Finance.module.css'

import Image from 'next/image'
export default function Common() {
    return (
        <div className={crypto.finance}>
            <span className={crypto.finance_title}>Finance</span>
            <div className={crypto.rows}>
                <div className={crypto.row_1}>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-1.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-2.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-3.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-4.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                </div>
                <div className={crypto.row_2}>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-5.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-6.svg"
                            width={50}
                            height={50}
                        />
                        <span className={crypto.icons_name}>Convert</span>
                    </div>
                    <div className={crypto.finance_icon}>
                        <Image
                            src="/SvgMenu/Finance-7.svg"
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