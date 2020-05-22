import React from 'react'
import { withRedux } from '../lib/redux'
require('date-utils')

import db from '../utils/db'
import Index from '../components/pages/top/Index'

const IndexPage = ({ graphData }) => {
  return (
    <>
      <Index graphData={graphData} />
    </>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const graphData = []

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

        graphData.push(payload)
      })
    })

  return { graphData }
}

export default withRedux(IndexPage)
