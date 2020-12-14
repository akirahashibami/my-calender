import React, {
  useState,
  useEffect
} from 'react';

import {
  ButtonGroup,
  Button,
  Input
} from '@material-ui/core';

const EffectFunction = () => {

  // state.countの初期値に0を設定
  const [count, setCount] = useState(0)

  // state.nameの初期値を設定
  const [name, setName] = useState({
    lastName: '',
    firstName: ''
  })
  // デフォルトではuseEffectは毎回レンダー後に呼ばれます
  // useEffectの第二引数に[count]を渡すとcountに変化があった時だけ再レンダー
  useEffect(() => {
    document.title = `${count}回クリックされました`
    console.log('RR');
  },[])

  return(
    <div>
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setCount((prev) => prev + 1)}>
          ボタン
        </Button>
        <Button onClick={() => setCount(0)}>
          リセット
        </Button>
      </ButtonGroup>
      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form noValidate autoComplete="off">
        <Input
          placeholder="姓"
          value={name.lastName}
          onChange={(e) => {setName({...name,lastName: e.target.value})}}
        />
        <Input
          placeholder="名"
          value={name.firstName}
          onChange={(e) => {setName({...name,firstName: e.target.value})}}
        />
      </form>
    </div>
  )
}


export default EffectFunction;
