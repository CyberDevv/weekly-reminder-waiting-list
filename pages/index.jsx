import IndexRightSide from '../components/IndexRightSide';
import WaitingForm from '../components/WaitingForm';

const index = () => {
   return (
      <div className='container grid items-center px-4 pt-6 mx-auto lg:pt-10 lg:grid-cols-2 justify-items-center h-afterNav'>
         <IndexRightSide />
         <WaitingForm />
      </div>
   );
};

export default index;
