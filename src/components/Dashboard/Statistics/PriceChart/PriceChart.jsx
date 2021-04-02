import React, { useMemo } from 'react'
import './PriceChart.css'
import { Chart } from 'react-charts'

import useBoughtProductState from '../../../../store/bought.js'
import useSoldProductState from '../../../../store/sold.js'

const getPrice = (array, date) => {
  return array.filter(a => a.date === date).map(a => a.boughtPrice).reduce((total, current) => total + current)
}

export default function PriceChart() {
  const [{ bought }, ] = useBoughtProductState()
  const [{ sold }, ] = useSoldProductState()

  const boughtDates = [...new Set(bought.map(b => b.date))]
  const soldDates = [...new Set (sold.map(b => b.date))]
  const boughtData = []
  boughtDates.forEach(date => {
    boughtData.push([date, getPrice(bought, date)])
  })
  const soldData = []
  soldDates.forEach(date => {
    soldData.push([date, getPrice(sold, date)])
  })

  const data = useMemo(
    () => [
      {
        label: 'Sold',
        data: soldData
      },
      {
        label: 'Bought',
        data: boughtData
      }
    ],
    []
  )

  const series = useMemo(
    () => ({
      type: 'area'
    }),
    []
  )
  const axes = useMemo(
    () => [
      { primary: true, position: 'bottom', type: 'ordinal' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )

  return (
    <div className='chart__container'>
      <Chart
        data={data}
        series={series}
        axes={axes}
        tooltip
      />
    </div>
  )
}
