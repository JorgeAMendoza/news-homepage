import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const Inter = localFont({
  src: '../../public/fonts/Inter-VariableFont.ttf',
  display: 'block',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={Inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
