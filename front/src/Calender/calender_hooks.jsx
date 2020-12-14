import React, {
  useState,
  createContext
} from 'react'

import dayjs from 'dayjs';

import Navigation from './Navigation/presentation';

// createContextを使ってYearContextとMonthContextを作成
export const YearContext = createContext()
export const MonthContext = createContext()

const day = dayjs();

// stateの設定
// 2つのstaetを扱う。それぞれのinitialStateを設定
function InitialState() {

  const [year, setYear] = useState(day.year())
  const [month, setMonth] = useState(day.month());

  return(
    <div>
      <YearContext.Provider value={year}>
        <MonthContext.Provider value={month}>
          <Navigation />
        </MonthContext.Provider>
      </YearContext.Provider>
    </div>
  )
}

export default InitialState;
