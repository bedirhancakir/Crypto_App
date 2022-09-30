import React from 'react';
import crypto from '../CssDocs/SignInEmail.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SignInEmail() {
    const router = useRouter()
    return (
        <div className={crypto.account_screen}>
            <div className={crypto.Content}>
                <span className={crypto.si_title}>Sign in</span>
                <div className={crypto.email_title}>
                    <span>Email</span>
                    <a
                        className={crypto.other_platform}
                        onClick={() => {
                            router.push('/componentsAccount/JavaScriptDocs/MobileAccount')
                        }}
                    >Sign in with mobile</a>
                </div>
                <form action="/componentsHomeScreen/JavaScriptDocs/HomeScreen">
                    <input
                        className={crypto.email_bar}
                        placeholder='Enter your email'
                        type="email" />
                    <label className={crypto.password_title}>
                        Password
                    </label>
                    <input
                        className={crypto.password_bar}
                        placeholder='Enter your password'
                        type="password" />
                    <a className={crypto.forgot_password} href="">
                        Forgot password?
                    </a>

                    <button
                        type='submit'
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
                <div className={crypto.flooter}>
                    <div className={crypto.rectangle3}></div>
                    <div className={crypto.fingerprint}>
                        <Image
                            src="/ImagesAccount/FingerPrint.png"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <span className={crypto.fingerprint_text}>
                    Use fingerprint instead?
                </span>
            </div>
        </div>
    )
}