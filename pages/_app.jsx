import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <div className='gradientBackground pt-6 min-h-screen'>
         <NavBar />
         <Component {...pageProps} />
      </div>
   );
}

export default MyApp;
