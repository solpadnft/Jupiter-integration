'use client'

import { useEffect } from 'react';
import styles from './page.module.css';

function Page() {

  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = "https://terminal.jup.ag/main-v2.js";
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    if (window.Jupiter) {
      window.Jupiter.init({ 
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://mainnet.helius-rpc.com/?api-key=ec3b681d-994c-4280-89e7-5d495233d6d4",
        strictTokenList: false,
        defaultExplorer: "SolanaFM",
        formProps: {
          initialAmount: "10000000",
          initialInputMint: "So11111111111111111111111111111111111111112",
          initialOutputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        },
      });
    } else {
      console.error("Jupiter script not loaded yet");
    }
  }
  return (
    <div className={styles.body}>

      <div id="integrated-terminal"></div>

    </div>
  );
}

export default Page;