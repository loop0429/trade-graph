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

import firebase from '../../../utils/firebase'

const Index = () => {
  const [graphData, setGraphData] = useState(null)

  useEffect(() => {
    const db = firebase.firestore()

    const data = []

    async function fetchData() {
      await db
        .collection('trade')
        .orderBy('date')
        .limit(30)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const fbData = doc.data()
            const payload = {
              balance: fbData.balance,
              date: fbData.date.toDate().toFormat('MM/DD')
            }

            data.push(payload)
            console.log(data)
          })
        })

      setGraphData(data)
    }

    fetchData()
  }, [setGraphData])

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
