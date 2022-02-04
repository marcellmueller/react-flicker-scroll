import { useState } from 'react';
import { FlickerScroll } from '../components';
import { Git, GitHub, Node, NPM, React } from '../assets';
import styles from './FlickerImage.module.css';

const items = [
  {
    name: 'Git',
    image: Git,
  },
  {
    name: 'GitHub',
    image: GitHub,
  },
  {
    name: 'React',
    image: React,
  },
  {
    name: 'Node',
    image: Node,
  },
  {
    name: 'NPM',
    image: NPM,
  },
];

const Basic = () => {
  const [currentItem, setCurrentItem] = useState(items[0]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {items.map((item, i) => {
          return (
            <FlickerScroll
              key={i}
              activeStyles={{
                color: 'red',
              }}
              className={styles.flicker}
              onFlickerOn={() => {
                setCurrentItem(
                  items.find((newItem) => newItem.name === item.name)
                );
              }}
              stayActive={item.name === currentItem.name}
            >
              {item.name}
            </FlickerScroll>
          );
        })}
      </div>

      <div className={styles.image}>
        <img src={currentItem.image} alt={currentItem.name} />
      </div>
    </div>
  );
};

export default Basic;
