import crypto from '../CssDocs/SplashScreen.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function SplashScreen() {
    const router = useRouter()
    return (
        <div className={crypto.SplashScreen}
            onClick={() => {
                router.push('/componentsAccount/JavaScriptDocs/OnBoarding')
            }}>
            <div className={crypto.splash_images}>
                <div className={crypto.splash_constellations}>
                    <Image
                        src='/ImagesAccount/constellations.png'
                        width={414}
                        height={800}
                    />
                </div>
                <div className={crypto.splash_background}>
                    <Image
                        src="/ImagesAccount/ConstBackground.png"
                        width={414}
                        height={488}
                    />
                </div>
                <div className={crypto.splash_logo}>
                    <Image
                        src="/ImagesAccount/splash_logo.png"
                        width={112}
                        height={95}
                    />
                </div>
                <div className={crypto.rectangle}></div>
            </div>
            <span className={crypto.logo_title}>Masmas Crypto</span>
        </div>
    )
}