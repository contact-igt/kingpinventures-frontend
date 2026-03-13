import { Akshar, Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/common/Navbar';
import Footer from '@/common/Footer';
import { useRouter } from 'next/router';
import CustomCursor from '@/common/Cursor';
import BackgroundAnimation from '@/common/BackgroundAnimation';

const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const akshar = Akshar({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-akshar",
});

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isBluerayPage = pathname === '/blueray';

  return (
    <div className={`min-h-screen bg-brand-warm ${bricolageGrotesque.variable} ${akshar.variable} ${!isBluerayPage ? 'text-brand-dark font-sans selection:bg-brand-lime selection:text-brand-dark cursor-none overflow-x-hidden relative' : ''}`}>
      {!isBluerayPage && (
        <>
          <CustomCursor />
          <BackgroundAnimation />
          <Navbar />
        </>
      )}
      <Component {...pageProps} />
      {!isBluerayPage && <Footer />}
    </div>
  );
}
