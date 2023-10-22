import './App.css'
function App() {
  function handleClick(){
    alert("You clicked me!")
  }
  const handleClick2 = () =>{
    alert('btn2 clicked')
  }

  const addToFive = (num) =>{
      alert(num + 5);
  }
  return (
    <>
     
      <h3> React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button> <br />
      <br />
      <button onClick={handleClick2}>Click 2</button>
      <br />
      <br />
      <button onClick={()=>{alert('Third bn click')}}>Third</button>
      <button onClick={() =>(addToFive(5))}>fourth</button>
     
    
    </>
  )
}

export default App
