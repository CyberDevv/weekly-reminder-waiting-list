const WaitingForm = () => {
   return (
      <div className='w-full pl-12'>
         <h4 className= "text-xl mb-4 font-bold">There is nothing to loose.</h4>
         <form className='flex justify-center items-center flex-col'>
            <div className='grid xl:grid-cols-2 gap-6 w-full'>
               <label htmlFor='lastName' className='grid'>
                  Last Name*
                  <input
                     type='text'
                     name='lastName'
                     className='border-2 border-black rounded px-4 py-2 mt-2 text-gray-900'
                     placeholder='Last Name'
                     required
                  />
               </label>

               <label htmlFor='firstname' className='grid'>
                  First Name*
                  <input
                     type='text'
                     name='firstname'
                     className='border-2 border-black rounded px-4 py-2 mt-2 text-gray-900'
                     placeholder='First Name'
                     required
                  />
               </label>

               <label htmlFor='email' className='grid'>
                  Email Address*
                  <input
                     type='email'
                     name='email'
                     className='border-2 border-black rounded px-4 py-2 mt-2 text-gray-900'
                     placeholder='Email Address'
                     required
                  />
               </label>

               <label htmlFor='country' className='grid'>
                  Country*
                  <input
                     type='text'
                     name='country'
                     className='border-2 border-black rounded px-4 py-2 mt-2 text-gray-900'
                     placeholder='Country'
                     required
                  />
               </label>

               <label htmlFor='city' className='grid'>
                  City*
                  <input
                     type='text'
                     name='city'
                     className='border-2 border-black rounded px-4 py-2 mt-2 text-gray-900'
                     placeholder='City'
                     required
                  />
               </label>

               <label htmlFor='tel' className='grid'>
                  Phone Number
                  <input
                     type='text'
                     name='tel'
                     className='border-2 border-black rounded px-4 py-2 mt-2 text-gray-900'
                     placeholder='Phone Number'
                  />
               </label>
               <label className= "col-span-2 text-gray-700 text-sm flex items-center" htmlFor='confirmation'>
                  <input type='checkbox' name='confirmation' className= "mr-1" />
                  Yes, I will like to receive news, updates and messages from Squid Game
               </label>
            </div>
            <button className='btn mt-8' type='submit'>
               Add to Waitlist
            </button>
         </form>
      </div>
   );
};

export default WaitingForm;
