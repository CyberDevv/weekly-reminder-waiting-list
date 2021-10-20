import IndexRightSide from '../components/IndexRightSide';
import WaitingForm from '../components/WaitingForm';

const index = () => {
   return (
      <div className= "grid grid-cols-2 items-center justify-items-center pt-10 container mx-auto">
         <IndexRightSide />
         <WaitingForm />
      </div>
   );
};

export default index;
