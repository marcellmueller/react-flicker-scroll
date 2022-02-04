import { FlickerScroll } from '../components';
import styles from './Basic.module.css';

const text = [
  'React',
  'Flicker',
  'Scroll',
  'package',
  'by',
  'Marcel',
  'Mueller',
];

const Basic = () => {
  return (
    <div>
      {text.map((line, i) => {
        return (
          <FlickerScroll
            key={i}
            activeStyles={{
              color: 'red',
            }}
            className={styles.flicker}
            onFlickerOn={() => console.log('flicker on')}
            onFlickerOff={() => console.log('flicker off')}
          >
            {line}
          </FlickerScroll>
        );
      })}
    </div>
  );
};

export default Basic;
