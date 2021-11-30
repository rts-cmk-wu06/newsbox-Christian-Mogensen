import { useEffect, useState, useContext } from "react";
import { LocalStorageContext } from "./localStorageContext";



const ToggleSwitch = ({toggleValue = 'toggle' }) => {

  const {isToggled,setIsToggled} = useContext(LocalStorageContext)


const toggle = () => {
    setIsToggled({
      ...isToggled,
      [toggleValue]:!isToggled[toggleValue]
    }
      )
}


  return (
    <>
      <div className="last-of-type:border-none border-b border-gray-200 dark:border-dark-primary-one flex justify-between p-6 items-center">
        <h3 className="Section__heading uppercase">{toggleValue} {isToggled[toggleValue]?.toString() || 'false'}</h3>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled[toggleValue]||false} onChange={toggle} />
          <span className="switch" />
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
