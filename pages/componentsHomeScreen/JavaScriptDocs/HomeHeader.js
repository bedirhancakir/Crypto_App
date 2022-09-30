import crypto from '../CssDocs/HomeHeader.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
    const router = useRouter()
    return (
        <div className={crypto.header}>
            <div
                className={crypto.profile_icon}
                onClick={() => {
                    router.push('/componentsHomeScreen/JavaScriptDocs/ProfileScreen')
                }}>
                <Image
                    src="/SvgHomeScreen/ProfilePhoto.svg"
                    width={36}
                    height={36}
                />
            </div>
            <div className={crypto.search}>
                <Image
                    src='/SvgHomeScreen/Search.svg'
                    width={22}
                    height={22}
                />
            </div>
            <div className={crypto.scanner}>
                <Image
                    src='/SvgHomeScreen/Scanner.svg'
                    width={23}
                    height={23}
                />
            </div>
            <div
                className={crypto.notifications}
                onClick={() => {
                    router.push('/componentsHomeScreen/JavaScriptDocs/Notifications')
                }}>
                <Image
                    src='/SvgHomeScreen/Notifications.svg'
                    width={25}
                    height={25}
                />
            </div>
        </div>
    )
}