import { useRef } from "react"

export default function Case1() {
    const ref = useRef(0)

    const handleClick = () => {
        ref.current = ref.current + 1;
        console.log(ref.current)
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}