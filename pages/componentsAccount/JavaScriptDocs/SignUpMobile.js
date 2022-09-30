import React from 'react';
import crypto from '../CssDocs/SignUpMobile.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SignUpMobile() {
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
                    <div
                        className={crypto.back_icon}
                        onClick={() => { router.back() }}>
                        <Image
                            src='/SvgAccount/back.svg'
                            width={50}
                            height={50}
                        />
                    </div>
                    <span className={crypto.back_title}>Sign Up</span>
                </div>
                <div className={crypto.content}>
                    <span className={crypto.register_title}>
                        Register with mobile
                    </span>
                    <p className={crypto.register_text}>
                        Please type your number, then we’ll send a verification code for authentication.
                    </p>
                    <form action='/componentsAccount/JavaScriptDocs/Verification'>
                        <span className={crypto.number_title}>
                            Mobile Number
                        </span>
                        <input
                            className={crypto.number_bar}
                            placeholder='Enter your mobile'
                            type="tel"
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        />
                        <button
                            className={crypto.OTP_button}>
                            Send OTP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}