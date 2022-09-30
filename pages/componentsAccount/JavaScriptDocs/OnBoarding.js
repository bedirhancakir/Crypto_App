import crypto from '../CssDocs/OnBoarding.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";



export default function OnBoarding() {
    const router = useRouter()
    return (
        <div className={crypto.all_page}>
            <div className={crypto.container}>
            <div className={crypto.swiper_panel}>
                <Swiper pagination={true} modules={[Pagination]} className={crypto.Swiper}>

                    <SwiperSlide className={crypto.swiperSlide}>
                        <div className={crypto.astro_img}>
                            <Image 
                            src="/ImagesAccount/astro_img1.png"
                            width={331}
                            height={369}
                            />
                        </div>
                        <div className={crypto.rectangle}>
                            </div>
                        <p className={crypto.title}>Trade anytime anywhere</p>
                        <p className={crypto.text}>Lorem, ipsum dolor sit amet consectetur pisicing. Quaerat exercitationem molestias temporibus ducimus voluptas adipisci?</p>
                    </SwiperSlide>
                    <SwiperSlide className={crypto.swiperSlide}>
                        <div className={crypto.astro_img}>
                            <Image
                            src="/ImagesAccount/astro_img2.png"
                            width={331}
                            height={369}
                            />
                            </div>
                        <div className={crypto.rectangle}>
                            </div>
                        <p className={crypto.title}>Save and invest at the same time</p>
                        <p className={crypto.text}>Lorem, ipsum dolor sit amet consectetur pisicing. Quaerat exercitationem molestias temporibus ducimus voluptas adipisci?</p>
                    </SwiperSlide>
                    <SwiperSlide className={crypto.swiperSlide}>
                        <div className={crypto.astro_img}>
                            <Image
                            src="/ImagesAccount/astro_img3.png"
                            width={331}
                            height={369}
                            />
                            </div>
                        <div className={crypto.rectangle}>
                            </div>
                        <p className={crypto.title}>Transact fast and easy</p>
                        <p className={crypto.text}>Lorem, ipsum dolor sit amet consectetur pisicing. Quaerat exercitationem molestias temporibus ducimus voluptas adipisci?</p>
                    </SwiperSlide>
                </Swiper>
                    <button className={crypto.button}
                     onClick={()=>{router.push('/componentsAccount/JavaScriptDocs/EmailAccount')}}
                    >Next</button>
            </div>
            </div>
        </div>
    )
}