import { useEffect, useState } from "react";

function App() {
  const [secret, setSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch("/secret")
      .then((res) => res.json())
      .then((data) => setSecret(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Secret:</h1>
      <pre>{secret}</pre>
    </div>
  );
}

export default App;
