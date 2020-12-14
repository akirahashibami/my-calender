// ReactからuseContextをimport
import React, {useContext} from 'react';
// AppコンポーネントからuserContext, HobbyContextをimport
import {UserContext, HobbyContext} from '../App';

const ContextD = () => {
  // useContextの引数に、UserContextやHobbyContextを渡すことによって
  // AppコンポーネントでProviderに私たvalueの値を変数に代入できる
  const user = useContext(UserContext)
  const hobby = useContext(HobbyContext)

  console.log(user);

  return(
    <p>
      {user.name} {user.age}歳: 趣味は{hobby}です
    </p>
  )
}

export default ContextD;
