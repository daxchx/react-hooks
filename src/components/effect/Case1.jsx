/**
 * ChatRoom コンポーネントがエフェクトを使って chat.js で定義された外部システムに接続しています。
 * “Open chat” を押すと ChatRoom コンポーネントが表示されます。
 * このサンドボックスは開発モードで実行されているため、こちらで説明されているように、
 * 接続と切断のサイクルが 1 回追加で発生します。
 * roomId と serverUrl をドロップダウンと入力欄で変更して、エフェクトがチャットに再接続する様子を確認してみてください。
 * “Close chat” を押すと、エフェクトが最後の 1 回の切断作業を行います。
 */

import { useEffect, useState } from "react"

export default function Case1() {
    const [roomId, setRoomId] = useState("general")
    const [show, setShow] = useState(false)

    return (
        <div>
            <span>Choose the chat room:</span>
            <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
            <button onClick={() => setShow(!show)}>{show ? "Close" : "Open"} chat</button>
            {show && <hr />}
            {show && (
                <ChatRoom roomId={roomId} />
            )}
        </div>
    )
    
}

function ChatRoom({roomId}) {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234")

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect()
        return () => {
            connection.disconnect()
        }

    }, [roomId, serverUrl])
 
    return (
        <div>
            <div>
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </div>
            <span>Welcome to the {roomId} room!</span>
        </div>
    )
}

function createConnection(serverUrl, roomId) {
    return {
      connect() {
        console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
    };
  }