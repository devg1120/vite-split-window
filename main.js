import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import Split from './split.js'
//import Split from 'split.js'

Split(['#one', '#two', '#three'], {
  sizes: [25, 25, 50],
  gutterSize: 20,
  minSize: [10, 10, 10]
});

Split(['#one1', '#one2'], {
  sizes: [50, 50],
  gutterSize: 20,
  direction: 'vertical',
  minSize: [10, 10]
});

// Split(['#two1', '#two2'], {
//   sizes: [25, 75],
//   gutterSize: 20,
//   direction: 'vertical',
//   minSize: [10, 10]
// });

Split(['#three1', '#three2'], {
  sizes: [75, 25],
  gutterSize: 20,
  direction: 'vertical',
  minSize: [10, 10]
});



