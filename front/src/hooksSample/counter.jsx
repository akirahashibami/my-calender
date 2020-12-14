import React, { useState } from 'react'
import './hooks.min.css'

// countの初期値
const intialState = Math.floor(Math.random() * 10) + 1

const Counter = () => {

  // countという名前のstate変数を宣言、初期値intialStateをセット
  // [] 1つ目の要素: stateの現在地 2つ目の要素: stateの現在地を更新する関数
  const [count, setCount] = useState(intialState)

  // openという名前のstate変数を宣言、初期値trueをセット
  const [open, setOpen] = useState(true)

  // toggleの関数を宣言

  // toggle = () => {
  //   this.setState({ open: !this.state.open })
  // }
  // と同じ
  const toggle = () => setOpen(!open)

  return(
    <div>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は {count} です</p>
        <button onClick={() => setCount(prevState => prevState + 1)}> +1 </button>
        <button onClick={() => setCount(count - 1)}> -1 </button>
        <button onClick={() => setCount(0)}> 0 </button>
        <button onClick={() => setCount(intialState)}>最初の数値に戻す</button>
      </div>
    </div>
  )
}

export default Counter;
