import crypto from '../CssDocs/Menu.module.css'
import MenuHeader from './MenuHeader'
import Common from './Common'
import Trade from './Trade'
import Finance from './Finance'
import HomeNavigation from '../../componentsHomeScreen/JavaScriptDocs/HomeNavigation'

export default function Menu() {
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
                <MenuHeader />
                <div className={crypto.content}>
                    <Common />
                    <Trade />
                    <Finance />
                </div>
                <div className={crypto.navigation}>
                    <HomeNavigation />
                </div>
            </div>
        </div>
    )
}