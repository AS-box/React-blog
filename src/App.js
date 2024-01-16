
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Route, Routes,  } from 'react-router-dom'
import { Home } from './pages/Home';
import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ArticleItem } from './components/ArticleItem';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { useEffect } from 'react';


// process.env~で先ほど.envファイルに入力したfirebaseConfigの値を参照しています
const firebaseConfig = {
  apiKey: "AIzaSyAT1_e7x7MrtQww_4VIiqNOaYMllKQOW2g",
  authDomain: "react-blog-d999f.firebaseapp.com",
  projectId: "react-blog-d999f",
  storageBucket: "react-blog-d999f.appspot.com",
  messagingSenderId: "633657576022",
  appId: "1:633657576022:web:896332af4ee7ab9ec649f7",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// NOTE >> Firebaseの初期化を行います。



function App() {
  useEffect(() => {

  
    const readData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'your-collection-name'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    };
    readData();
  },[])
  
  return (
    <div className="App">
      <Header></Header>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<ArticleItem />} />
        <Route path="*" element={ <Home /> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
