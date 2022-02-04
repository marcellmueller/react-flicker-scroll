import styles from './App.module.css';
import { Basic, FlickerImage } from './examples';
import { GitHub, NPM } from './assets';

function App() {
  return (
    <div className={styles.app}>
      <IconLink
        alt="GitHub"
        icon={GitHub}
        text="View project on GitHub"
        url="https://github.com/marcellmueller/react-flicker-scroll"
      />
      <IconLink
        alt="NPM"
        icon={NPM}
        text="View project on NPM"
        url="https://www.npmjs.com/package/react-flicker-scroll"
      />
      <div className={styles.container}>
        <Basic />
        <FlickerImage />
      </div>
    </div>
  );
}

const IconLink = ({ alt, icon, text, url }) => {
  return (
    <a href={url}>
      <div className={styles.link}>
        <img src={icon} alt={alt} />
        <span>{text}</span>
      </div>
    </a>
  );
};
export default App;
