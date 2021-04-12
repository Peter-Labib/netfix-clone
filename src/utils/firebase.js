import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCymU7o-auGP6X_nzWEfibyh4nG_H7-QXE',
  authDomain: 'netflix-clone-708a4.firebaseapp.com',
  projectId: 'netflix-clone-708a4',
  storageBucket: 'netflix-clone-708a4.appspot.com',
  messagingSenderId: '435776835545',
  appId: '1:435776835545:web:3282e7663d1063c1f1d3c8',
  measurementId: 'G-LSBZHPJMYV',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.database()
const auth = firebase.auth()

export { auth }
export default database
