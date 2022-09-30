import React, { useState } from 'react';
import crypto from '../CssDocs/AddFavorite.module.css'
import data from './CardData'
import ItemsCard from './ItemsCard';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Image from 'next/image';

export default function FavoriteScreen() {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenBottom: false,
    });
    return (
        <div className={crypto.row}>
            <div>
                <button
                    onClick={() => setState({ isPaneOpenBottom: true })}
                    className={crypto.btn}>
                    <div className={crypto.add_circle}>
                        <Image
                            src='/SvgTrades/add-circle.svg'
                            width={20}
                            height={20}
                        />
                        <span className={crypto.add_fav}>Add Favorite</span>
                    </div>
                </button>
            </div>
            <SlidingPane
                className={crypto.favorite}
                closeIcon={
                    <div className={crypto.daarow}>
                        <Image
                            src='/SvgTrades/daarow.svg'
                            width={8}
                            height={12}
                        />
                    </div>
                }
                isOpen={state.isPaneOpenBottom}
                from="bottom"
                title={
                    <div className={crypto.favorite_header}>
                        <div className={crypto.favorite_text_side}>
                            <span className={crypto.title}>FAVORITE</span>
                        </div>
                    </div>
                }
                onRequestClose={() => setState({ isPaneOpenBottom: false })}
            >
                <div className='row justify-content-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <ItemsCard img={item.img}
                                title1={item.title1}
                                title2={item.title2}
                                chart={item.chart}
                                price={item.price}
                                desc={item.desc}
                                key={index}
                                item={item}
                            />
                        )
                    })}
                </div>
            </SlidingPane>
        </div>
    )
}