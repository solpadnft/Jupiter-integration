import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';


export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px',
        }}
      >
        <div>
          <Link href="https://solpad.art/">
            <img src="/logo.png" height={70} alt="" />
          </Link>
        </div>
        
        <div>
          <WalletButton />
        </div>
      </div>
      <div style={{ flexGrow: 1, padding: '30px'}}>{children}</div>
      <footer
        style={{
          display: 'Flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '3em',
          }}
      >
       <div >
          <Link href="https://twitter.com/Solpadnft">
            <img src="/tw.png" height={40} />
          </Link>

          <Link href="https://discord.gg/jmMY8MrQCt">
            <img src="/d.png" height={40} />
          </Link>
          
          <Link href="https://github.com/Solpad-art">
            <img src="/gi.png" height={40} />
          </Link>
        
        </div>
      </footer>
    </div>
  );
}
