import {Post} from './Post';
import {Header} from './components/Header'
import styles from './Aplicativo.module.css'

import './styles.css'
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author = "bryan felipe" 
            content="Lorem Ipsum dolor amem sit consectur"
          />
          <Post
            author = "Ramon Lopes" 
            content="Um post um tanto quanto bacana"
          />
        </main>
      </div>
    </div>
  )

}

