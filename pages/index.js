import React from 'react'
import { withRedux } from '../lib/redux'
import { useCollection } from '@nandorojo/swr-firestore'

import Index from '../components/pages/top/Index'

const IndexPage = (props) => {
  const { data } = useCollection('trade', {
    orderBy: ['date', 'desc'],
    limit: 30
  })

  return (
    <>
      {data ? (
        <Index graphData={data} />
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default withRedux(IndexPage)
