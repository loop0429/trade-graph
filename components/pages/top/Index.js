import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
require('date-utils')

const Index = (props) => {
  const { graphData } = props
  const [data, setData] = useState([])

  useEffect(() => {
    const list = graphData.map(element => {
      return {
        balance: element.balance,
        date: element.date.toDate().toFormat('MM/DD')
      }
    })
    setData(list.reverse())
  }, [graphData]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid vertical={false} stroke="#eee" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 13 }}
          tickSize={0}
          tickMargin={13}
        />
        <YAxis
          type="number"
          domain={['auto', 'auto']}
          padding={{ top: 15, bottom: 0 }}
          tick={{ fontSize: 10 }}
          tickSize={0}
          tickMargin={13}
          tickFormatter={val => {
            return val.toLocaleString()
          }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="balance"
          dot={true}
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Index
