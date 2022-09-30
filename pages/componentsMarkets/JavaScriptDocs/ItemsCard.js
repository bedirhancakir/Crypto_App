import react, { useState } from "react";
import crypto from '../CssDocs/ItemsCard.module.css'
import Image from "next/image";
import { useCart } from "react-use-cart";

export default function ItemsCard(props) {

    const { addItem } = useCart();
    return (
        <div>
            <div className={crypto.card}>
                <div>
                    <Image src={props.img}
                        width={30}
                        height={30}
                    />
                </div>
                <div className={crypto.first_desc}>
                    <span className={crypto.title1}>{props.title1}</span>
                    <span className={crypto.title2}>{props.title2}</span>
                </div>
                <div className={crypto.chart_img}>
                    <Image
                        src={props.chart}
                        width={75}
                        height={31}
                    />
                </div>
                <div className={crypto.second_desc}>
                    <span className={crypto.price}>{props.price}</span>
                    <span className={crypto.desc}>{props.desc}</span>
                </div>
                <button
                className={crypto.add_btn}
                    onClick={() => addItem(props.item)}>
                    Add to Favorite
                </button>
            </div>
        </div>
    )
}