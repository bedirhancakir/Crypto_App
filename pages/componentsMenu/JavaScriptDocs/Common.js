import crypto from '../CssDocs/Common.module.css'
import Image from 'next/image'

export default function Common() {
    return (
        <div className={crypto.common}>
            <span className={crypto.common_title}>Common</span>
            <div className={crypto.common_icons}>
                <div className={crypto.common_icon}>
                    <Image
                        src="/SvgMenu/Common-1.svg"
                        width={50}
                        height={50}
                    />
                    <span className={crypto.common_icon_title}>Transfer</span>
                </div>
                <div className={crypto.common_icon}>
                    <Image
                        src="/SvgMenu/Common-2.svg"
                        width={50}
                        height={50}
                    />
                    <span className={crypto.common_icon_title}>Transfer</span>
                </div>
                <div className={crypto.common_icon}>
                    <Image
                        src="/SvgMenu/Common-3.svg"
                        width={50}
                        height={50}
                    />
                    <span className={crypto.common_icon_title}>Transfer</span>
                </div>
                <div className={crypto.common_icon}>
                    <Image
                        src="/SvgMenu/Common-4.svg"
                        width={50}
                        height={50}
                    />
                    <span className={crypto.common_icon_title}>Transfer</span>
                </div>
            </div>
        </div>
    )
}