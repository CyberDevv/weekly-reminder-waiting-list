const NavBar = () => {
   return (
      <nav className='container flex items-center justify-between px-4 mx-auto'>
         <h1 className='w-full text-xl font-bold tracking-wide lg:text-2xl lg:w-1/2'>
            Ace Games
         </h1>
         <ul className='absolute top-0 right-0 lg:items-center lg:justify-around hidden lg:w-1/2 lg:space-x-4 text-lg bg-white lg:flex lg:relative'>
            <li className='navItems'>Promotions</li>
            <li className='navItems'>About</li>
            <li className='navItems'>FAQ</li>
            <li>
               <button className='btn'>Find Your Home</button>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
