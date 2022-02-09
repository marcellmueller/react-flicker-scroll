# React Flicker Scroll

A React component that detects when it is in the center of the viewport and can change styling while centered.

**Demo:**
https://marcellmueller.github.io/react-flicker-scroll/

### Installation

```
npm i react-flicker-scroll

or

yarn add react-flicker-scroll
```

### Usage

Use the `FlickerScroll` component to wrap your content. Active styles can be customized by using the `activeStyles` prop as shown.

You can technically put any type children inside the `FlickerScroll` component though only the basic `activeStyles` css is supported.

`onFlickerOn` and `onFlickerOff` props take a function that runs as the component scroll in and out of the center of the viewport.

`stayActive` prop accepts a boolean value and will keep the active state regardless of scroll position when true.

```javascript
import { FlickerScroll } from 'react-flicker-scroll';
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

const Example = () => {
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
            stayActive={line === 'React'}
          >
            {line}
          </FlickerScroll>
        );
      })}
    </div>
  );
};

export default Example;
```

### Dependencies

srraf to monitor scrolling
https://github.com/estrattonbailey/srraf
