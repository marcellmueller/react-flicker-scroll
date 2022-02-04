import styles from './App.module.css';
import { Basic, FlickerImage } from './examples';

function App() {
  return (
    <div className={styles.app}>
      <Basic />
      <FlickerImage />
    </div>
  );
}

export default App;
