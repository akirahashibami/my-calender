import React from 'react';

import '../Calender.min.css';

import dayjs from 'dayjs';

import {Box} from '@material-ui/core';

import {
  isSomeDay,
  isSomeMonth,
  isFirstDay
} from '../services/calender';

const CalenderElement = ({ day }) => {

  const today = dayjs()

  // 当日かどうか判断
  const isToday = isSomeDay(day, today)

  // day.date()には送られてきた日付の数字が入る
  // 1と同じ日をtrueとして最初の日にちを決める
  const format = isFirstDay(day) ? "M/D":"D"

  //　何曜日なのか計算する
  const days = ["日", "月", "火", "水", "木", "金", "土"]
  const wday = days[day.$W]

  // 今月以外をグレーダウン
  const textColor = isSomeMonth(day, today) ? "" : "text.secondary"

  return (
    <div className='calenderElement'>
      <div
        className='calenderElement__date'
        align="center"
        variant="caption"
        component="div"
      >
        <div className='calenderElement__date--wday'>{wday}</div>
        <Box
          className={isToday ? "today": ""}
          color={textColor}
        >
          {day.format(format)}
        </Box>
      </div>
    </div>
  )
}

export default CalenderElement;
