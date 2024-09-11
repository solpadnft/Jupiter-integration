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
            <img src="/logo.png" height={40} alt="" />
          </Link>
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
       <div style={
          { display: 'flex', alignItems: 'center', gap: '20px'}}
       
       >
          <Link href="https://www.linkedin.com/company/solnm" target="_blank" rel="noreferrer">
            <img src="/li.png" height={30} />
          </Link>
         

         <Link href="https://x.com/Solnmcom" target="_blank" rel="noreferrer">
            <img src="/tw.png" height={30} />
          </Link>
         

          <Link href="https://discord.gg/jmMY8MrQCt" target="_blank" rel="noreferrer">
            <img src="/d.png" height={30} />
          </Link>

          
          <Link href="https://github.com/Solnm" target="_blank" rel="noreferrer">
            <img src="/gi.png" height={30} />
          </Link>
        
        </div>
      </footer>
    </div>
  );
}
