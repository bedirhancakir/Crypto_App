import React from 'react';
import crypto from '../CssDocs/Successfull.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Successfull() {
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
                <div className={crypto.blur}></div>
                <div className={crypto.astro_img}>
                    <Image
                        src="/ImagesAccount/astro_img4.png"
                        width={106}
                        height={249}
                    />
                </div>
                <div className={crypto.rectangle}></div>
                <div className={crypto.content}>
                    <span className={crypto.successfull_text}>
                        Your account has been
                        successfully created!
                    </span>
                    <button
                        className={crypto.continue_button}
                        onClick={() => {
                            router.push('/componentsHomeScreen/JavaScriptDocs/HomeScreen')
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}