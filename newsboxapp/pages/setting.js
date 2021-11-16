import ToggleSwitch from "../components/toggleSwitch";



const setting = () => {

  return (
    <>
      <div className="wrapper">
        <main className="p-4 flex flex-col justify-between bg-[color:var(--Primary-clr-Setup)] wrapper">
          <header className="Header__grafik-element text-center m-8 leading-tight">
            <h2 className="Primary__heading spc-clr-h1">Manage</h2>
            <h2 className="Sub__title">Categories</h2>
          </header>
          <div className="rounded-3xl bg-[color:var(--Typografy-clr-Snow)] shadow-lg">
            <div className="flex border-b justify-between p-6 items-center border-[color:var(--Primary-clr-Setup)]">
              <h3 className="Section__heading uppercase">Europe</h3>

              <ToggleSwitch />
            </div>
            <div className="flex border-b justify-between p-6 items-center border-[color:var(--Primary-clr-Setup)]">
              <h3 className="Section__heading uppercase">health</h3>

              <ToggleSwitch />
            </div>
            <div className="flex border-b justify-between p-6 items-center border-[color:var(--Primary-clr-Setup)]">
              <h3 className="Section__heading uppercase">sport</h3>

              <ToggleSwitch />
            </div>
            <div className="flex border-b justify-between p-6 items-center border-[color:var(--Primary-clr-Setup)]">
              <h3 className="Section__heading uppercase">business</h3>

              <ToggleSwitch />
            </div>
            <div className="flex justify-between p-6 items-center">
              <h3 className="Section__heading uppercase">travel</h3>

              <ToggleSwitch />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="Secondary__font Secondary__font_hover px-8 py-2 border border-[color:var(--Secondary-clr-Fossil)] mt-10 rounded-3xl hover:bg-black hover:text-white] transition-all hover:border-transparent">
              TOGGLE DARK MODE
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default setting;
