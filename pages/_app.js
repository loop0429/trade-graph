import React from 'react'
import App from 'next/app'
import 'firebase/firestore'
import 'firebase/auth'
import { Fuego, FuegoProvider} from '@nandorojo/swr-firestore'

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}

const fuego = new Fuego(clientCredentials)

class MyApp extends App {
  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <FuegoProvider fuego={fuego}>
        <Component {...pageProps} />
      </FuegoProvider>
    )
  }
}

export default MyApp
