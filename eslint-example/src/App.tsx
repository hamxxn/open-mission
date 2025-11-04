import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  const is_Working = true;
  console.log(is_Working);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
