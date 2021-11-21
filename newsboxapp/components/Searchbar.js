const Searchbar = () => {
    return ( 
        <aside className='h-[70px] bg-gray-50'>
            <div className="w-full p-5 h-full flex items-center">
            <input className='relative w-full bg-[#F0F3F4] searchbar py-2 rounded px-5' type="text" name="search" id="" placeholder='Search news' />
            
            <div className='absolute right-8'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="var(--Secondary-clr-Fossil)">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
            </div>
            
            </div>
        </aside>
     );
}
 
export default Searchbar;