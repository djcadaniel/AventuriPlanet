import { useState } from 'react';
import { Navigation } from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
    </>
  )
}

export default App