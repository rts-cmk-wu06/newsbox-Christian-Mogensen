import { useEffect } from "react"

const Toggle = ({ toggleValue = 'toggle', isToggled, setIsToggled}) => {
    useEffect(()=> {
        setIsToggled(JSON.parse(localStorage.getItem(toggleValue))|| false)
    }, [])
    const toggle = () => {
        setIsToggled(!isToggled)
        if (typeof window !== "undefined") {
        localStorage.setItem(toggleValue, JSON.stringify(!isToggled))
        }
    }

    return (
        <div className='flex items-center justify-center gap-12'>
            <p>{toggleValue}</p>
            <button className={
                `p-4 ${isToggled ? 'bg-green-500 text-white':'bg-white text-black'}`
            }
            onClick={toggle}>
                {isToggled ? 'Toggled':'Toggle'}
            </button>
        </div>
    )
}

export default Toggle