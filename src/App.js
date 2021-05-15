import './App.css';

function App() {

  async function getData () {
    const res = await fetch('https://api.github.com/orgs/Netflix/repos', {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
    });
    const data = await res.json();
    console.log(data)
  }
  // getData()

  return (
    <div>hello world</div>
  );
}

export default App;
