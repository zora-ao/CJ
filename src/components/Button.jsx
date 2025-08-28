import { useEffect } from "react"
import { useTheme } from "../contexts/themeContext"


const Button = ({
    value, bgColor, textColor
}) => {

    const {themeMode} = useTheme();

    return (
        <button className={`border px-4 py-3 rounded ${bgColor} ${textColor} ${themeMode === "light" ? "border-black" : "border-white"}`}>{value}</button>
    )
}

export default Button
