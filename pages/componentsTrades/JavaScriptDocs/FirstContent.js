import crypto from '../CssDocs/FirstContent.module.css'
import { useRouter } from 'next/router';
import TradesHeader from './TradesHeader'
import TimeBar from './TimeBar'
import Graphs from './Graphs'
import Image from 'next/image';

export default function FirstContent() {
    const router = useRouter()
    return (
        <div className={crypto.first_content}>
            <div className={crypto.header}>
                <TradesHeader/>
            </div>
            <div className={crypto.graph_panel}>
                <Graphs/>
            </div>
            <div className={crypto.second_content}>
                <TimeBar/>
            </div>

        </div>
    )
}