import Link from 'next/link'

const archive = () => {
  return (
    <>
      {/* // Header -> need to look into how to change props dynamically */}
      <header className="sticky top-0 header h-[60px] flex items-center shadow-sm bg-white  border-b w-full">
        <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
        <Link href='/' exact>
          <a>
          <div className="w-full h-full flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div></a></Link>
          <h1 className="Section__heading justify-self-center">Archive</h1>
          <Link href='/setting' exact><a> <div className="w-full h-full flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div></a></Link>
        </nav>
      </header>
      {/* // content loaded from fetch */}
    </>
  );
};

export default archive;
