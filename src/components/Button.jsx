import { useEffect } from "react"
import { useTheme } from "../contexts/themeContext"


const Button = ({
    value, bgColor, textColor
}) => {

    const {themeMode} = useTheme();

    return (
        <button className={`border px-3 py-2 rounded ${bgColor} ${textColor} ${themeMode === "light" ? "border-black" : "border-white font-semibold"}`}>{value}</button>
    )
}

export default Button
