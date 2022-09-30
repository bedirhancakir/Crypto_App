import crypto from '../CssDocs/TradingBar.module.css'
import { useRouter } from 'next/router';
import React, { useState } from "react";
import Image from 'next/image';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingContentSell from './SlidingContentSell'
import SlidingContentBuy from './SlidingContentBuy'

export default function TradingBar() {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenBottom: false,
    });
    const router = useRouter()
    return (
        <div>
            <div className={crypto.trading_bar}>
                <button
                    onClick={() => setState({ isPaneOpen: true })}
                    className={crypto.buy}>Buy</button>
                <button
                    onClick={() => setState({ isPaneOpenBottom: true })}
                    className={crypto.sell}>Sell</button>
            </div>
            <SlidingPane
                className={crypto.sliding}
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
                title={
                <div className={crypto.sliding_header}>
                    <div className={crypto.sliding_text_side}>
                        <span className={crypto.grey_text}>AVAILABLE:</span>
                        <span className={crypto.grey_text}>15.234164400</span>
                        <span className={crypto.grey_text}>BUSD</span>
                    </div>
                    <div className={crypto.add_circle}>
                        <Image
                            src='/SvgTrades/add-circle.svg'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                }
                from="bottom"
                onRequestClose={() => setState({ isPaneOpenBottom: false })}
            >
                <div>
                <SlidingContentSell/>
                </div>
            </SlidingPane>
            <SlidingPane
                className={crypto.sliding}
                closeIcon={
                    <div className={crypto.daarow}>
                        <Image
                            src='/SvgTrades/daarow.svg'
                            width={8}
                            height={12}
                        />
                    </div>
                }
                isOpen={state.isPaneOpen}
                title={
                <div className={crypto.sliding_header}>
                    <div className={crypto.sliding_text_side}>
                        <span className={crypto.grey_text}>AVAILABLE:</span>
                        <span className={crypto.grey_text}>15.234164400</span>
                        <span className={crypto.grey_text}>BUSD</span>
                    </div>
                    <div className={crypto.add_circle}>
                        <Image
                            src='/SvgTrades/add-circle.svg'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                }
                from="bottom"
                onRequestClose={() => setState({ isPaneOpen: false })}
            >
                <div>
                    <SlidingContentBuy/>
                </div>
            </SlidingPane>
        </div>

    )
};