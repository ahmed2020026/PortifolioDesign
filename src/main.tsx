import { createRoot } from 'react-dom/client'
import { App } from './App';
import './App.css'
import { Themes } from './context/Mode';
import { Toaster } from "@/components/ui/sonner"


const screen = document.querySelector('#root')

if (!screen) throw new Error('Root Element not Found');

const root = createRoot(screen)
root.render(
  <Themes>
    <App />
    <Toaster />
  </Themes>
)