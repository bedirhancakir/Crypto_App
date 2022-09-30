import crypto from '../CssDocs/Notifications.module.css'
import Header from './HomeHeader'
import HomeNavigation from './HomeNavigation'
import Image from 'next/image';

export default function Notification() {
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <Header />
                <div className={crypto.content}>
                    <div className={crypto.content_group_one}>
                        <span className={crypto.content_title}>Notifications</span>
                        <div className={crypto.filter}>
                            <Image
                                src='/SvgHomeScreen/Filter.svg'
                                width={22}
                                height={22}
                            />
                        </div>
                    </div>
                    <div className={crypto.content_group_two}>
                        <div className={crypto.content_image}>
                            <Image
                                src='/ImagesHomeScreen/Notification_image.png'
                                width={97}
                                height={136}
                            />
                        </div>
                        <span className={crypto.image_title}>You have no notifications</span>
                        <p className={crypto.image_text}>lorem ipsum lorem ipsum</p>
                    </div>
                </div>
                <div className={crypto.navigation}>
                    <HomeNavigation />
                </div>
            </div>
        </div>
    )
}