import crypto from '../CssDocs/ProfileScreen.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProfileScreen() {
    const router = useRouter()
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <div className={crypto.header}>
                    <div className={crypto.header_background}></div>
                    <button
                        className={crypto.back_icon}
                        onClick={() => {

                            router.push('/componentsHomeScreen/JavaScriptDocs/HomeScreen')
                        }}
                    >
                        <Image
                            src="/SvgAccount/back.svg"
                            width={46}
                            height={46}
                        />
                    </button>
                    <span className={crypto.header_title}>Profile</span>
                </div>
                <div className={crypto.view_profile}>
                    <div className={crypto.profile_photo}>
                        <Image
                            src="/SvgHomeScreen/ProfilePhoto.svg"
                            width={110}
                            height={110}
                        />
                    </div>
                    <span className={crypto.profile_id}>User 1234</span>
                    <ul className={crypto.content}>
                        <li className={crypto.informations}>
                            <span className={crypto.info}>
                                Username
                            </span>
                            <button
                                className={crypto.forward_parent}
                                onClick={() => {
                                    router.push('/componentsHomeScreen/JavaScriptDocs/EditProfile')
                                }}>
                                <span className={crypto.info_key}>
                                    username1234
                                </span>
                                <div className={crypto.forward_icon} >
                                    <Image
                                        src='/SvgHomeScreen/Forward.svg'
                                        height={30}
                                        width={30}
                                    />
                                </div>
                            </button>
                        </li>
                        <li className={crypto.informations}>
                            <span className={crypto.info}>
                                Email
                            </span>
                            <button
                                className={crypto.forward_parent}
                                onClick={() => {
                                    router.push('/componentsHomeScreen/JavaScriptDocs/EditProfile')
                                }}>
                                <span className={crypto.info_key}>
                                    example@mail.com
                                </span>
                                <div
                                    className={crypto.forward_icon}>
                                    <Image
                                        src='/SvgHomeScreen/Forward.svg'
                                        height={30}
                                        width={30}
                                    />
                                </div>
                            </button>
                        </li>
                        <li className={crypto.informations}>
                            <span className={crypto.info}>
                                Mobile Number
                            </span>
                            <button
                                className={crypto.forward_parent}
                                onClick={() => {
                                    router.push('/componentsHomeScreen/JavaScriptDocs/EditProfile')
                                }}>
                                <span className={crypto.info_key}>
                                    234 567 8900
                                </span>
                                <div className={crypto.forward_icon}>
                                    <Image
                                        src='/SvgHomeScreen/Forward.svg'
                                        height={30}
                                        width={30}
                                    />
                                </div>
                            </button>
                        </li>
                        <li className={crypto.informations}>
                            <span className={crypto.info}>
                                Password
                            </span>
                            <button
                                className={crypto.forward_parent}
                                onClick={() => {
                                    router.push('/componentsHomeScreen/JavaScriptDocs/EditProfile')
                                }}>
                                <span className={crypto.info_key}>
                                    *********
                                </span>
                                <div className={crypto.forward_icon}>
                                    <Image
                                        src='/SvgHomeScreen/Forward.svg'
                                        height={30}
                                        width={30}
                                    />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}