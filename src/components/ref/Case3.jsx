import { useRef } from "react"

export default function Case3() {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    )
}