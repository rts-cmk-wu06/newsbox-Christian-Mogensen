import { useState } from "react";
const lcsNArr = [];
const ToggleSwitch = ({ section }) => {
  const [isToggled, setIsToggled] = useState(false);

  if (isToggled == true) {
    lcsNArr.push(section);
    localStorage.setItem("category", JSON.stringify(lcsNArr));
  }
  if (!isToggled) {
    lcsNArr = JSON.parse(localStorage.getItem("category"));
    lcsNArr.splice(section, 1);
    localStorage.setItem("category", JSON.stringify(lcsNArr));
  }

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="last-of-type:border-none border-b border-gray-200 flex justify-between p-6 items-center">
        <h3 className="Section__heading uppercase">{section}</h3>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className="switch" />
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
