import { createRoot } from 'react-dom/client'
import { App } from './App';
import './App.css'
import { Themes } from './context/Mode';

const screen = document.querySelector('#root')

if (!screen) throw new Error('Root Element not Found');

const root = createRoot(screen)
root.render(
  <Themes>
    <App />
  </Themes>
)