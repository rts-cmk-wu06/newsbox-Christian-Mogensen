import {motion}from 'framer-motion'
const Searchbar = () => {
  return (
    <motion.aside
    initial={{y:-70}}
  animate={{y:0}}
  transition={{delay:0.7}}
    
    className="relative h-[70px] bg-gray-50 dark:bg-dark-primary-one dark:text-dark-secondary-three">
      <div className="w-full p-5 h-full flex items-center">
        <input
          className=" w-full outline-none bg-[#F0F3F4] dark:bg-dark-primary-two dark:text-white searchbar py-2 rounded px-5 dark: dark:border-primary-drab dark:border"
          type="text"
          name="search"
          id=""
          placeholder="Search news"
        />

        <div className="absolute right-8">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </motion.aside>
  );
};

export default Searchbar;
