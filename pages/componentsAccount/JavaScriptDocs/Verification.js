import React from 'react';
import crypto from '../CssDocs/Verification.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Verification() {
    const router = useRouter()
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <div className={crypto.account_background}>
                    <Image
                    src="/ImagesAccount/ConstBackground.png"
                    width={414}
                    height={414}
                    />
                </div>
                <div className={crypto.header}>
                    <div onClick={() => {
                        router.back()
                    }}>
                        <div className={crypto.back_icon}>
                            <Image  src='/SvgAccount/back.svg'
                            width={46}
                            height={46}
                            />
                        </div>
                    </div>
                    <span className={crypto.back_title}>
                        Verification
                    </span>
                </div>
                <div className={crypto.content}>
                    <span className={crypto.code_title}>
                        Enter your code
                    </span>
                    <p className={crypto.code_text}>
                        please type the code we sent to
                    </p>
                    <a href="/" className={crypto.sent_number}>
                        +1 234 567 8900
                    </a>
                    <form
                        action='/componentsAccount/JavaScriptDocs/Successfull'>
                        <div className={crypto.pincode}>
                            <input
                                className={crypto.code_bar}
                                type="tel"
                                maxLength='1'
                                pattern="[0-9]{1}" />
                            <input
                                className={crypto.code_bar}
                                type="tel"
                                maxLength='1'
                                pattern="[0-9]{1}" />
                            <input
                                className={crypto.code_bar}
                                type="tel"
                                maxLength='1'
                                pattern="[0-9]{1}" />
                            <input
                                className={crypto.code_bar}
                                type="tel"
                                maxLength='1'
                                pattern="[0-9]{1}" />
                        </div>
                        <span className={crypto.code_timing}>
                            Resend code (30)
                        </span>
                        <a className={crypto.resend_link} href="/">Resend Link</a>
                        <button
                            className={crypto.continue_button}>
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}