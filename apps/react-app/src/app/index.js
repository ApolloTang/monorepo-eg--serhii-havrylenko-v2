import React from 'react';
import img from './react.png';
import s from './style.module.less';
import MyButton from '@myscope/pkg--button';
import MyButtonBlue from '@myscope/pkg--button-blue';
import MyButtonGreen from '@myscope/pkg--button-green';



import FontTest from 'font-test/';
const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div><MyButton>hello world</MyButton> </div>
    <div><MyButtonBlue>hello Blue Button</MyButtonBlue> </div>
    <div><MyButtonGreen>hello Green Button</MyButtonGreen> </div>
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <FontTest />
  </div>
);

export default App;
