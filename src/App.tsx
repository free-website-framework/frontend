import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((resp) => setMsg(resp.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Hello:</h1>
      <pre>{msg}</pre>
    </div>
  );
}

export default App;
