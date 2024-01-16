// インポート対象のFirebaseApp,Auth,Firestore,FirebaseStorageはTypeScriptの型です
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// process.env~で先ほど.envファイルに入力したfirebaseConfigの値を参照しています
const firebaseConfig = {
  apiKey: "AIzaSyAT1_e7x7MrtQww_4VIiqNOaYMllKQOW2g",
  authDomain: "react-blog-d999f.firebaseapp.com",
  projectId: "react-blog-d999f",
  storageBucket: "react-blog-d999f.appspot.com",
  messagingSenderId: "633657576022",
  appId: "1:633657576022:web:896332af4ee7ab9ec649f7",
};

// NOTE >> Firebaseの初期化を行います。
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 
