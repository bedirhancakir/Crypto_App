import crypto from '../CssDocs/FirstContent.module.css'
import Image from 'next/image';

export default function FirstContent() {
    return (
        <div className={crypto.content}>
            <div className={crypto.box}>
                <div>
                    <div className={crypto.rocket_mask}>
                        <Image
                            src='/SvgHomeScreen/ContentMask.svg'
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className={crypto.rectangle}>
                    </div>
                    <div className={crypto.rocket}>
                        <Image
                            src='/SvgHomeScreen/ContentRocket.svg'
                            height={65}
                            width={56}
                        />
                    </div>
                </div>
                <span className={crypto.box_title}>P2P Trading</span>
                <div className={crypto.arrow}>
                    <Image
                        src='/SvghomeScreen/ContentRightArrow.svg'
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <div className={crypto.box}>
                <div>
                    <div className={crypto.rocket_mask}>
                        <Image
                            src='/SvgHomeScreen/ContentMask.svg'
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className={crypto.rectangle}>
                    </div>
                    <div className={crypto.rocket}>
                        <Image
                            src='/SvgHomeScreen/ContentCredit.svg'
                            height={52}
                            width={52}
                        />
                    </div>
                </div>
                <span className={crypto.box_title}>
                    Credit/Debit Card</span>
                <span className={crypto.box_text}>
                    Visa, Mastercard</span>
                <div className={crypto.arrow}>
                    <Image
                        src='/SvghomeScreen/ContentRightArrow.svg'
                        width={40}
                        height={40}
                    />
                </div>
            </div>

        </div>

    )
}
