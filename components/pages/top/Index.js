import react from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const Index = () => {
  const graphData = [
    {
      date: '05/22',
      balance: 500000
    },
    {
      date: '05/23',
      balance: 400000
    },
    {
      date: '05/28',
      balance: 800000
    },
    {
      date: '05/29',
      balance: 200000
    },
    {
      date: '05/30',
      balance: 5000000
    },
    {
      date: '05/31',
      balance: 500000
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={graphData} margin={{ top: -1 }}>
        <CartesianGrid vertical={false} stroke="#eee" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 13 }}
          tickSize={0}
          tickMargin={13}
        />
        <YAxis
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
