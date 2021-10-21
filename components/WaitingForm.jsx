const WaitingForm = () => {
   return (
      <div className='w-full mt-8 lg:pl-6 xl:pl-8 2xl:pl-12 lg:mt-0'>
         <h4 className='mb-2 text-base font-bold lg:text-xl lg:mb-4'>
            There is nothing to loose.
         </h4>
         <form className='flex flex-col items-center justify-center max-w-md lg:max-w-full'>
            <div className='w-full space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0'>
               <label htmlFor='lastName' className='grid'>
                  Last Name*
                  <input
                     type='text'
                     name='lastName'
                     className='px-4 py-2 mt-2 text-gray-900 bg-transparent border-2 border-black rounded lg:w-full'
                     placeholder='Last Name'
                     required
                  />
               </label>

               <label htmlFor='firstname' className='grid'>
                  First Name*
                  <input
                     type='text'
                     name='firstname'
                     className='px-4 py-2 mt-2 text-gray-900 bg-transparent border-2 border-black rounded lg:w-full'
                     placeholder='First Name'
                     required
                  />
               </label>

               <label htmlFor='email' className='grid'>
                  Email Address*
                  <input
                     type='email'
                     name='email'
                     className='px-4 py-2 mt-2 text-gray-900 bg-transparent border-2 border-black rounded lg:w-full'
                     placeholder='Email Address'
                     required
                  />
               </label>

               <label htmlFor='country' className='grid'>
                  Country*
                  <input
                     type='text'
                     name='country'
                     className='px-4 py-2 mt-2 text-gray-900 bg-transparent border-2 border-black rounded lg:w-full'
                     placeholder='Country'
                     required
                  />
               </label>

               <label htmlFor='city' className='grid'>
                  City*
                  <input
                     type='text'
                     name='city'
                     className='px-4 py-2 mt-2 text-gray-900 bg-transparent border-2 border-black rounded lg:w-full'
                     placeholder='City'
                     required
                  />
               </label>

               <label htmlFor='tel' className='grid'>
                  Phone Number
                  <input
                     type='text'
                     name='tel'
                     className='px-4 py-2 mt-2 text-gray-900 bg-transparent border-2 border-black rounded lg:w-full'
                     placeholder='Phone Number'
                  />
               </label>
               <label
                  className='text-xs text-gray-700 lg:items-center lg:col-span-2 lg:text-sm lg:flex'
                  htmlFor='confirmation'
               >
                  <input
                     type='checkbox'
                     name='confirmation'
                     className='mt-4 lg:mt-0 mr-1.5'
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
