import React from 'react'
import { withRedux } from '../lib/redux'

import Index from '../components/pages/top/Index'

const IndexPage = () => {
  return (
    <>
      <Index />
    </>
  )
}

export default withRedux(IndexPage)
