import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

// カレンダー１ヶ月分の配列を作る
export const createCalender = () => {

  // 今月の最初の日を取得
  const firstDay = dayjs().startOf('month');
  // 最初の日の曜日のindexを取得
  const firstDayIndex = firstDay.day();

  return(
    Array(35)
    .fill(0)
    .map((_,i) => {
      const diffFromFirstDay = i - firstDayIndex
      const day = firstDay.add(diffFromFirstDay, "day")
      return day
    })
  )
}

// 同じ日かどうか判定
export const isSomeDay = (d1, d2) => {
  // 文字列に変換した上で全く同じ文字列になているかの判定
  const format = "YYYYMMDD"
  return d1.format(format) === d2.format(format)
}

// 月が同じか判定
export const isSomeMonth = (m1, m2) => {
  // 文字列に変換した上で全く同じ文字列になているかの判定
  const format = "YYYYMM"
  return m1.format(format) === m2.format(format)
}

// 月の初めの日を判定
export const isFirstDay = day => day.date() === 1

// 翌月の情報を取得
export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
}

// 前月の情報を取得
export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
}

// 上記関数で使うformatMonth
export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
})
