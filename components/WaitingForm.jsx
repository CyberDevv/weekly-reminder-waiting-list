const WaitingForm = () => {
   return (
      <div className='w-full mt-8 lg:pl-12 lg:mt-0'>
         <h4 className='mb-2 text-base font-bold  lg:text-xl lg:mb-4'>
            There is nothing to loose.
         </h4>
         <form className='flex flex-col max-w-md items-center justify-center'>
            <div className='w-full space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0'>
               <label htmlFor='lastName' className='grid'>
                  Last Name*
                  <input
                     type='text'
                     name='lastName'
                     className='px-4 py-2 bg-transparent lg:w-full mt-2 text-gray-900 border-2 border-black rounded'
                     placeholder='Last Name'
                     required
                  />
               </label>

               <label htmlFor='firstname' className='grid'>
                  First Name*
                  <input
                     type='text'
                     name='firstname'
                     className='px-4 py-2 bg-transparent lg:w-full mt-2 text-gray-900 border-2 border-black rounded'
                     placeholder='First Name'
                     required
                  />
               </label>

               <label htmlFor='email' className='grid'>
                  Email Address*
                  <input
                     type='email'
                     name='email'
                     className='px-4 py-2 bg-transparent lg:w-full mt-2 text-gray-900 border-2 border-black rounded'
                     placeholder='Email Address'
                     required
                  />
               </label>

               <label htmlFor='country' className='grid'>
                  Country*
                  <input
                     type='text'
                     name='country'
                     className='px-4 py-2 bg-transparent lg:w-full mt-2 text-gray-900 border-2 border-black rounded'
                     placeholder='Country'
                     required
                  />
               </label>

               <label htmlFor='city' className='grid'>
                  City*
                  <input
                     type='text'
                     name='city'
                     className='px-4 py-2 bg-transparent lg:w-full mt-2 text-gray-900 border-2 border-black rounded'
                     placeholder='City'
                     required
                  />
               </label>

               <label htmlFor='tel' className='grid'>
                  Phone Number
                  <input
                     type='text'
                     name='tel'
                     className='px-4 py-2 bg-transparent lg:w-full mt-2 text-gray-900 border-2 border-black rounded'
                     placeholder='Phone Number'
                  />
               </label>
               <label
                  className='items-center text-xs text-gray-700 lg:col-span-2 lg:text-sm lg:flex'
                  htmlFor='confirmation'
               >
                  <input
                     type='checkbox'
                     name='confirmation'
                     className='mt-4 mr-1'
                  />
                  Yes, I will like to receive news, updates and messages from
                  Squid Game
               </label>
            </div>
            <button className='my-4 btn lg:mt-8' type='submit'>
               Add to Waitlist
            </button>
         </form>
      </div>
   );
};

export default WaitingForm;
