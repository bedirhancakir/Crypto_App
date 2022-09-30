import React from 'react';
import crypto from '../CssDocs/SignUpEmail.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SignUpEmail() {
    const router = useRouter()
    return (
        <div className={crypto.account_screen}>
            <div className={crypto.Content}>
                <div className={crypto.si_title}>Sign up</div>
                <form action='/componentsAccount/JavaScriptDocs/Successfull'>
                    <div className={crypto.email_title}>
                        <span>Email</span>
                        <a className={crypto.other_platform}
                            onClick={() => {
                                router.push('/componentsAccount/JavaScriptDocs/SignUpMobile')
                            }}>Register with mobile</a>
                    </div>
                    <input
                        className={crypto.email_bar}
                        placeholder='Please enter email'
                        type="email" />
                    <span className={crypto.password_title}>
                        Password
                    </span>
                    <input
                        className={crypto.password_bar}
                        placeholder='Please enter password'
                        type="password" />
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
                            width={24}
                            height={24}
                        />
                        Facebook
                    </button>
                    <button
                        className={crypto.socialm_button2}>
                        <Image
                            src='/SvgAccount/Google.svg'
                            width={24}
                            height={24}
                        />
                        Google
                    </button>
                </div>
                <div className={crypto.rectangle3}></div>
            </div>
        </div>
    )
}