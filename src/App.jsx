import React from 'react'

function App() {
  const [contador, setContador] = React.useState(0)

  function aumentar(){
    setContador( prevC => prevC + 5)
  }
  function diminuir(){
    setContador ( prevC => prevC - 5)
  }
  function reset(){
    setContador ( prevC => prevC = 0)
  }
    return (
    <main>
      <h1 className='titulo'>Contador <span className='t'>React</span></h1>
      
    <section className="container">
      <div className='marks'>
            <div className='mark'>
              <span className='m'>25</span>
              <span className={contador >= 25 ? 'meta' : 'none'}>{ contador >= 25 ? '.' : ''}</span>
            </div>
            <div className='mark'>
              <span className='m'>50</span>
              <span className={contador >= 50 ? 'meta' : 'none'}>{ contador >= 50 ? '.' : '' }</span>
            </div>
            <div className='mark'>
              <span className='m'>100</span>
              <span className={contador >= 100 ? 'meta' : 'none'}>{ contador >= 100 ? '.' : '' }</span>
            </div>
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