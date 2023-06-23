
import firebase from 'firebase/app' //node_modulesからコアとなるfirebaseのパッケージをimportする、firebaseを使うなら必ずimportする必要がある
import 'firebase/firestore' // firestoreを使いたいのでimportする
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCA4UBOiCz4wR9oKOzTlUEWcDVHWOvffxo",
    authDomain: "nuxt-learn-taichees.firebaseapp.com",
    projectId: "nuxt-learn-taichees",
    storageBucket: "nuxt-learn-taichees.appspot.com",
    messagingSenderId: "113170100902",
    appId: "1:113170100902:web:c1a0b965290b170c5a7a67"
};

// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスも初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }