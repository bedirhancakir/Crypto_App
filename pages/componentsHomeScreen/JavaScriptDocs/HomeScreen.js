import crypto from '../CssDocs/HomeScreen.module.css'
import Header from './HomeHeader'
import MiniMenu from './MiniMenu'
import FirstContent from './FirstContent'
import SeconContent from './SecondContent'
import HomeNavigation from './HomeNavigation';

export default function HomeScreen() {
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <div className={crypto.navbar}>
                    <div className={crypto.header}>
                        <Header />
                    </div>
                    <div className={crypto.categories}>
                        <MiniMenu />
                    </div>
                </div>
                <div className={crypto.first_content}>
                    <FirstContent />
                </div>
                <div className={crypto.second_content}>
                    <SeconContent />
                </div>
                <div className={crypto.main_navigation}>
                    <HomeNavigation />
                </div>
            </div>
        </div>
    )
}