import react, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "next/image";
import crypto from '../CssDocs/SlidingButtons.module.css'

export default function SlidingBuyButton() {
    const [value, setValue] = useState(38418.46)
    const finalValue = value
    const maxValue = 38418.46
    const quarterValue = value ? maxValue * 0.25 : 0
    const halfValue = value ? maxValue * 0.50 : finalValue
    const threeQuarterValue = value ? maxValue * 0.75 : finalValue
    const fullValue = value ? maxValue : finalValue

    const [price, setPrice] = useState(38418.46)
    const priceValue = price

    const [count, setCount] = useState()

    return (
        <div>
            <div className={crypto.price}>
                <span className={crypto._title}>Price:</span>
                <span className={crypto._value}>{priceValue.toFixed(2)}</span>
                <div className={crypto.market_buttons}>
                    <button
                        onClick={() => { (priceValue < maxValue) ? setPrice(priceValue + 925) : setPrice(maxValue) }}
                        className={crypto.add}>
                        <Image
                            src='/SvgTrades/add.svg'
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        onClick={() => { (priceValue > 0) ? setPrice(priceValue - 925) : setPrice(0) }}
                        className={crypto.minus}>
                        <Image
                            src='/SvgTrades/minus.svg'
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
            <div className={crypto.quantity}>
                <div className={crypto.row_1}>
                    <span className={crypto._title}>Quantity:</span>
                    <span className={crypto._value}>{finalValue.toFixed(2)}</span>
                    <div className={crypto.market_buttons}>
                        <button
                            onClick={() => { (finalValue < maxValue) ? setValue(finalValue + 625) : setValue(maxValue) }}
                            className={crypto.add}>
                            <Image
                                src='/SvgTrades/add.svg'
                                width={24}
                                height={24}
                            />
                        </button>
                        <button
                            onClick={() => { (finalValue <= 1) ? setValue(1) : setValue(finalValue - 625) }}
                            className={crypto.minus}>
                            <Image
                                src='/SvgTrades/minus.svg'
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
                <section className={crypto.row_2}>
                    <input
                        className={crypto.range}
                        value={value}
                        type="range"
                        min={1}
                        max={38418.46}
                        step={0.999986}
                        onChange={event => {
                            setValue(event.target.valueAsNumber)
                        }}
                    />
                    <div>
                        <Tabs>
                            <TabList className={crypto.range_buttons}>
                                <Tab
                                    onClick={() => {
                                        setValue(quarterValue)
                                    }}
                                    className={crypto.range_button}>25%</Tab>
                                <Tab
                                    onClick={() => {
                                        setValue(halfValue)
                                    }}
                                    className={crypto.range_button}>50%</Tab>
                                <Tab
                                    onClick={() => {
                                        setValue(threeQuarterValue)
                                    }}
                                    className={crypto.range_button}>75%</Tab>
                                <Tab
                                    onClick={() => {
                                        setValue(fullValue)
                                    }}
                                    className={crypto.range_button}>100%</Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </section>
            </div>
            <div className={crypto.button_title}>
                <span className={crypto.total}>
                    TOTAL:
                </span>
                <span className={crypto.total_value}>
                    25.234164400
                </span>
            </div>
            <button className={crypto.buy_button}>Buy</button>
        </div>
    )
}
