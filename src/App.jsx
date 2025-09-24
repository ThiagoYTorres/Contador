import React from 'react'

function App() {
  const [contador, setContador] = React.useState(0)

  function aumentar(){
    setContador( prevC => prevC + 1)
  }
  function diminuir(){
    setContador ( prevC => prevC - 1)
  }
  function reset(){
    setContador ( prevC => prevC = 0)
  }
    return (
    <main>
      <h1 className='titulo'>Contador <span>React</span></h1>
      
    <section className="container">
      <div className='marks'>
            <div className='mark'></div>
            <div className='mark'></div>
            <div className='mark'></div>
      </div>
            <div className="counter">
              
                <button className="minus" onClick={aumentar} >+</button>
                <h1 className="count">{contador}</h1>
                <button className="plus" onClick={diminuir} >-</button>               
            </div>
                <button className="reset" onClick={reset}>RESET</button>
    </section>
    </main>
  )
  
}

export default App