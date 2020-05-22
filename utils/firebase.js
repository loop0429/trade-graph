import firebase from 'firebase/app'
import 'firebase/firestore'

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials)
}

export default firebase
