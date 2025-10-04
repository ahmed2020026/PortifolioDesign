import { createRoot } from 'react-dom/client'
import { App } from './App';
import './App.css'

const screen = document.querySelector('#root')

if (!screen) throw new Error('Root Element not Found');

const root = createRoot(screen)
root.render(
  <App />
)