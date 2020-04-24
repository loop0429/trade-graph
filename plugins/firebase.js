import firebase from '@firebase/app'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.API,
    authDomain: 'my-trade-graph.firebaseapp.com',
    projectId: 'my-trade-graph',
    storageBucket: 'gs://my-trade-graph.appspot.com'
  })
}

export default firebase
