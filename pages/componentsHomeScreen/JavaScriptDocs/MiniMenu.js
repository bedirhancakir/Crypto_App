import crypto from '../CssDocs/MiniMenu.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function MiniMenu() {
    const router = useRouter()
    return (
        <div className={crypto.mini_menu}>
            <div className={crypto.first_row}>
                <div className={crypto.mid_icon}>
                    <Image
                        src="/SvgHomeScreen/MidIcons-1.svg"
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
                <div className={crypto.mid_icon}>
                    <Image
                        src='/SvgHomeScreen/MidIcons-2.svg'
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
                <div className={crypto.mid_icon}>
                    <Image
                        src='/SvgHomeScreen/MidIcons-3.svg'
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
                <div className={crypto.mid_icon_setting}>
                    <Image
                        src='/SvgHomeScreen/MidIcons-4.svg'
                        width={24}
                        height={24}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
            </div>
            <div className={crypto.second_row}>
                <div className={crypto.mid_icon}>
                    <Image
                        src="/SvgHomeScreen/MidIcons-5.svg"
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
                <div className={crypto.mid_icon}>
                    <Image
                        src='/SvgHomeScreen/MidIcons-6.svg'
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
                <div className={crypto.mid_icon}>
                    <Image
                        src='/SvgHomeScreen/MidIcons-7.svg'
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>Deposit</span>
                </div>
                <div
                    className={crypto.mid_icon}
                    onClick={() => {
                        router.push('/componentsMenu/JavaScriptDocs/Menu')
                    }}>
                    <Image
                        src='/SvgHomeScreen/MidIcons-8.svg'
                        width={44}
                        height={44}
                    />
                    <span className={crypto.mid_icon_title}>More</span>
                </div>
            </div>
        </div>


    )
}