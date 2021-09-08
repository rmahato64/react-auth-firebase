import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey= EACT_APP_FIREBASE_API_KEY,
  authDomain= REACT_APP_AUTH_DOMAIN,
  projectId= REACT_APP_PROJECT_ID ,
  storageBucket= REACT_APP_STORAGE_BUCKET,
  messagingSenderId= REACT_APP_MESSAGING_SENDING_ID,
  appId= REACT_APP_FIREBASE_ID

})

export const auth = app.auth()
export default app