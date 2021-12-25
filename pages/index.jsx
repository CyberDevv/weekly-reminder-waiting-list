import Head from 'next/head';

import IndexRightSide from '../components/IndexRightSide';
import WaitingForm from '../components/WaitingForm';

const index = () => {
   return (
      <>
         <Head>
            <title>Waiting List</title>
         </Head>
         
         <div className='container grid items-center px-4 pt-6 mx-auto lg:pt-10 lg:grid-cols-2 justify-items-center h-afterNav'>
            <IndexRightSide />
            <WaitingForm />
         </div>
      </>
   );
};

export default index;
