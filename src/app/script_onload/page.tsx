'use client';
import Script from 'next/script';
import { useMemo, useState } from 'react';

export default function ScriptOnload() {
  let [stripe, setStripe] = useState<{ stripe: typeof window.Stripe } | null>(
    null
  );

  function handleLoad() {
    let stripe = window.Stripe('p_k');
    console.log('stripe loaded ', new Date(), stripe);
    setStripe(stripe);
  }

  console.info(' =====> ', stripe);
  // factory 是一个Arrow Function， 判断stripe是否load注入了，注入就返回列表
  let factory = () =>
    stripe
      ? Object.entries(stripe).filter(
          ([_key, value]) => typeof value === 'function'
        )
      : [];
  //为什么 useMemo？？？ 因为 methods 列表 需要一个循环，不会经常变，所以缓存一下
  const methods = useMemo(factory, [stripe]);

  return (
    <>
      <Script
        id={'stripe'}
        src={'https://js.stripe.com/v3/'}
        onLoad={handleLoad}
      ></Script>

      <main>
        <h1>Executing code after loading</h1>
        <div>
          <div>Stripe methods: </div>
          <ul>
            {methods.map(([method]) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
