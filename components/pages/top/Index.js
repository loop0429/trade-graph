import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const Index = (props) => {
  const {graphData} = props

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={graphData}>
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
