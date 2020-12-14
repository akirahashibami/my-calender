import React from 'react';

import CalenderElement from '../CalenderElement/index';
import {createCalender} from '../services/calender';

import '../Calender.min.css';

const calender = createCalender()

const CalenderBoard = () => {

  console.log(calender);

  return(
    <div className="container">
      {calender.map(c => (
        /*カレンダー上に全く同じ日付は存在しないので一意なkeyを保証する*/
        <li key={c.toISOString()}>
          {/*format()は指定した表示方法に沿ってフォーマット表示する*/}
          <CalenderElement day={c} />
        </li>
      ))}
    </div>
  )
}

export default CalenderBoard;
