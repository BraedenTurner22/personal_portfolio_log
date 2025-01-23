import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Cooking } from './components/Cooking/Cooking';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <About/>
      <Projects/>
      <Cooking/>
      <Contact/>
    </div>
  )
}

export default App;