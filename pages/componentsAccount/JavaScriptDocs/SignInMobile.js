import React from 'react';
import crypto from '../CssDocs/SignInMobile.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SignInMobile() {
    const router = useRouter()
    return (

        <div className={crypto.Content}>
            <div className={crypto.si_title}>Sign in</div>
            <form action='/componentsHomeScreen/JavaScriptDocs/HomeScreen'>
                <div className={crypto.number_title}>
                    <span>Mobile number</span>
                    <a
                        className={crypto.other_platform}
                        onClick={() => { router.back() }}

                    >Sign in with email</a>
                </div>
                <input
                    className={crypto.email_bar}
                    placeholder='Enter your mobile'
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
                <span className={crypto.password_title}>
                    Password
                </span>
                <input
                    className={crypto.password_bar}
                    placeholder='Enter your password'
                    type="password" />
                <a className={crypto.forgot_password} href="">
                    Forgot password?
                </a>
                <button
                    className={crypto.last_sign_button}>
                    Sign in
                </button>
            </form>
            <span className={crypto.socialm_title}>
                Or login with
            </span>
            <div className={crypto.socialm_buttons}>
                <button
                    className={crypto.socialm_button1}>
                    <Image
                        src='/SvgAccount/Facebook.svg'
                        width={25}
                        height={25}
                    />
                    Facebook
                </button>
                <button
                    className={crypto.socialm_button2}>
                    <Image
                        src='/SvgAccount/Google.svg'
                        width={25}
                        height={25}
                    />
                    Google
                </button>
            </div>
            <div>
                <div className={crypto.rectangle3}></div>
                <div className={crypto.fingerprint}>
                    <Image
                        src="/ImagesAccount/FingerPrint.png"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <span className={crypto.fingerprint_text}>Use fingerprint instead?</span>
        </div>
    )
}