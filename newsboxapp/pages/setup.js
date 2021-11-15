import Footer from "../components/Footer";

const setup = () => {
  return (
    <>
    <main className="p-5 m-auto flex flex-col container bg-[color:var(--Secondary-clr-Fossil)] h-screen">
      <h2>setup</h2>
      <div className='rounded-3xl bg-[color:var(--Typografy-clr-Snow)]'>
        <div className='flex border-b justify-between p-6 items-center border-gray-400'>
          <h3 className='Section__heading uppercase'>Europe</h3>
          <input type="radio" name="" id="" />
        </div>
        <div className='flex border-b justify-between p-6 items-center border-gray-400'>
          <h3 className='Section__heading uppercase'>health</h3>
          <input type="radio" name="" id="" />
        </div>
        <div className='flex border-b justify-between p-6 items-center border-gray-400'>
          <h3 className='Section__heading uppercase'>sport</h3>
          <input type="radio" name="" id="" />
        </div>
        <div className='flex border-b justify-between p-6 items-center border-gray-400'>
          <h3 className='Section__heading uppercase'>business</h3>
          <input type="radio" name="" id="" />
        </div>
        <div className='flex border-b justify-between p-6 items-center border-gray-400'>
          <h3 className='Section__heading uppercase'>travel</h3>
          <input type="radio" name="" id="" />
        </div>
      </div>
      <div className='flex justify-center'><button className='px-4 py-2 border border-gray-400 mt-10 rounded-3xl'>TOGGLE DARK MODE</button></div>
    </main>
    <Footer />
    </>
  );
};

export default setup;
