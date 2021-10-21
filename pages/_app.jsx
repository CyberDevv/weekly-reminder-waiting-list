import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <div className='min-h-screen pt-6 lg:gradientBackground bg-gray-50'>
         <NavBar />
         <Component {...pageProps} />
      </div>
   );
}

export default MyApp;
