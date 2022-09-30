import react from "react";
import { useCart } from "react-use-cart";
import crypto from '../CssDocs/Cart.module.css'
import { useRouter } from "next/router";
import Image from "next/image";

export default function Cart() {
    const router = useRouter()
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if (isEmpty) return (
        <div className={crypto.empty}>
            <Image
            src='/ImagesHomeScreen/Notification_image.png'
            width={97}
            height={136}
            />
            <span className={crypto.empty_title}>You have no Favorites</span>
        </div>)

    return (
        <div className={crypto.cart}>
            <div>
                {items.map((item, index) => {
                    return (
                        <div className={crypto.card} key={index}>
                            <div>
                                <Image src={item.img}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className={crypto.first_desc}>
                                <span className={crypto.title1}>{item.title1}</span>
                                <span className={crypto.title2}>{item.title2}</span>
                            </div>
                            <div>
                                <Image
                                src={item.chart}
                                width={91}
                                height={31}
                                />
                            </div>
                            <div className={crypto.second_desc}>
                                <span className={crypto.price}>{item.price}</span>
                                <span className={crypto.desc}>{item.desc}</span>
                            </div>
                            <button
                            className={crypto.remove_btn}
                                onClick={() => removeItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}