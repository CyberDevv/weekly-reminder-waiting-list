const NavBar = () => {
   return (
      <nav className='container flex items-center justify-between mx-auto my-6'>
         <h1 className='text-2xl font-bold tracking-wide'>Squid Game</h1>
         <ul className='flex items-center justify-around space-x-6 text-lg'>
            <li className='navItems'>Promotions</li>
            <li className='navItems'>About</li>
            <li className='navItems'>FAQ</li>
            <li>
               <button className='hover:scale-105 transition-all hover:shadow-lg duration-300 transform text-white uppercase bg-black tracking-wide px-6 py-2.5 text-sm rounded'>
                  Find Your Home
               </button>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
