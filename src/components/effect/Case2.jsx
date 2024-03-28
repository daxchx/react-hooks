/**
 * 外部システムはブラウザの DOM 自体です。
 * イベントリスナは通常 JSX で指定しますが、この方法ではグローバルな window オブジェクトへはリッスンすることはできません。
 * エフェクトを使うことで、window オブジェクトに接続し、そのイベントをリッスンできます。
 * pointermove イベントにリッスンすることで、カーソル（または指）の位置を追跡し、赤い点をそれに合わせて移動させることができます。
 */

import { useEffect, useState } from "react"

export default function Case2() {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
        window.removeEventListener('pointermove', handleMove);
        };
    }, [])

    return (
        <div>
             <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                }} />
        </div>
    )
}