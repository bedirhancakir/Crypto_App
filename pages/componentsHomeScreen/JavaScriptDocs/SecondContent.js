import crypto from '../CssDocs/SecondContent.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css";
import Image from 'next/image';

export default function SecondContent() {
    return (
        <div className={crypto.content}>
            <div className={crypto.first_row}>
                <span className={crypto.swiper_title1}>
                    Recent Coin
                </span>
                <div className={crypto.swiper_panel}>
                    <Swiper
                        slidesPerView={2.9}
                        freeMode={false}
                        spaceBetween={8}
                        modules={[FreeMode]}
                        className={crypto.swiper}>
                        <SwiperSlide className={crypto.swiper_slide}>
                            <div className={crypto.card}>
                                <span className={crypto.card_title}>
                                    40,059.83
                                </span>
                                <div className={crypto.card_icon}>
                                    <Image
                                        src='/SvgHomeScreen/CryptoLogos-1.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <span className={crypto.card_text}>
                                        BTC/BUSD
                                    </span>
                                    <span className={crypto.little_text}>
                                        +0.81%
                                    </span>
                                </div>
                                <div className={crypto.card_graph}>
                                    <Image
                                        src='/ImagesHomeScreen/Graph-1.png'
                                        width={142.5}
                                        height={31}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={crypto.swiper_slide}>
                            <div className={crypto.card}>
                                <span className={crypto.card_title2}>
                                    2,059.83
                                </span>
                                <div className={crypto.card_icon}>
                                    <Image
                                        src='/SvgHomeScreen/CryptoLogos-2.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <span className={crypto.card_text}>
                                        SOL/BUSD
                                    </span>
                                    <span className={crypto.little_text2}>
                                        +0.81%
                                    </span>
                                </div>
                                <div className={crypto.card_graph}>
                                    <Image
                                        src='/ImagesHomeScreen/Graph-2.png'
                                        width={142.5}
                                        height={31}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={crypto.swiper_slide}>
                            <div className={crypto.card}>
                                <span className={crypto.card_title}>
                                    40,059.83
                                </span>
                                <div className={crypto.card_icon}>
                                    <Image
                                        src='/SvgHomeScreen/CryptoLogos-1.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <span className={crypto.card_text}>
                                        BTC/BUSD
                                    </span>
                                    <span className={crypto.little_text}>
                                        +0.81%
                                    </span>
                                </div>
                                <div className={crypto.card_graph}>
                                    <Image
                                        src='/ImagesHomeScreen/Graph-1.png'
                                        width={142.5}
                                        height={31}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={crypto.second_row}>
                <span className={crypto.swiper_title2}>
                    Top Coins
                </span>
                <div className={crypto.swiper_panel}>
                    <Swiper
                         slidesPerView={2.9}
                         freeMode={false}
                         spaceBetween={8}
                         modules={[FreeMode]}
                        className={crypto.swiper}>
                        <SwiperSlide className={crypto.swiper_slide}>
                            <div className={crypto.card}>
                                <span className={crypto.card_title}>
                                    40,059.83
                                </span>
                                <div className={crypto.card_icon}>
                                    <Image
                                        src='/SvgHomeScreen/CryptoLogos-3.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <span className={crypto.card_text}>
                                        BTC/BUSD
                                    </span>
                                    <span className={crypto.little_text}>
                                        +0.81%
                                    </span>
                                </div>
                                <div className={crypto.card_graph}>
                                    <Image
                                        src='/ImagesHomeScreen/Graph-1.png'
                                        width={142.5}
                                        height={31}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={crypto.swiper_slide}>
                            <div className={crypto.card}>
                                <span className={crypto.card_title2}>
                                    2,059.83
                                </span>
                                <div className={crypto.card_icon}>
                                    <Image
                                        src='/SvgHomeScreen/CryptoLogos-4.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <span className={crypto.card_text}>
                                        REN/BUSD
                                    </span>
                                    <span className={crypto.little_text2}>
                                        +0.81%
                                    </span>
                                </div>
                                <div className={crypto.card_graph}>
                                    <Image
                                        src='/ImagesHomeScreen/Graph-2.png'
                                        width={142.5}
                                        height={31}
                                    />
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide className={crypto.swiper_slide}>
                            <div className={crypto.card}>
                                <span className={crypto.card_title}>
                                    40,059.83
                                </span>
                                <div className={crypto.card_icon}>
                                    <Image
                                        src='/SvgHomeScreen/CryptoLogos-1.svg'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <span className={crypto.card_text}>
                                        BTC/BUSD
                                    </span>
                                    <span className={crypto.little_text}>
                                        +0.81%
                                    </span>
                                </div>
                                <div className={crypto.card_graph}>
                                    <Image
                                        src='/ImagesHomeScreen/Graph-1.png'
                                        width={142.5}
                                        height={31}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}