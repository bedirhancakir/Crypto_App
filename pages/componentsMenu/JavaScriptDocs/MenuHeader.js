import crypto from '../CssDocs/MenuHeader.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MenuHeader() {
    const router = useRouter()
    return (
        <div className={crypto.header}>
            <div className={crypto.header_back}>
                <button
                    onClick={() => {
                        router.back()
                    }}
                    className={crypto.back_icon}>
                    <Image
                        src="/SvgAccount/back.svg"
                        width={46}
                        height={46}
                    />
                </button>
                <span className={crypto.back_title}>
                    Menu
                </span>
            </div>
            <div className={crypto.edit_profile}>
                <div className={crypto.profile_icon}>
                    <Image
                        src="/SvgHomeScreen/ProfilePhoto.svg"
                        width={50}
                        height={50}
                    />
                </div>
                <div className={crypto.text}>
                    <span className={crypto.nick_name}>User 1234</span>
                    <span className={crypto.id}>ID: 1234567890</span>
                </div>
                <button
                    className={crypto.header_button}
                    onClick={() => {
                        router.push('/componentsHomeScreen/JavaScriptDocs/EditProfile')
                    }}
                >Edit Profile</button>
            </div>
            <div className={crypto.header_rectangle}></div>
        </div>
    )
}