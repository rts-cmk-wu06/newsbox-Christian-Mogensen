import { useState } from "react";


const ToggleSwitch = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  // if(isToggled){
  //   localStorage.setItem('category', props.section)
  // }
  // if(!isToggled){
  //   localStorage.removeItem('category', props.section)
  // }
  const onToggle = () => {
    setIsToggled(!isToggled);
  };
  // console.log(localStorage);
  return (
    <>
      <div className="last-of-type:border-none border-b border-gray-200 flex justify-between p-6 items-center">
        <h3 className="Section__heading uppercase">{props.section}</h3>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch" />
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
