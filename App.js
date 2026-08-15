import React, { useState } from './React'
import { render } from './ReactDom'

const root = document.getElementById('root')

const h1 = <h1>hii</h1>

const container = <div className='container' id='parent' title='parent container'>
    <h1 className='child'>Hello mini React</h1>
    <p className='child'>this is a paragraph</p>
</div>

const fruits = ['apple', 'mango', 'banana', 'peru'];

export function App() {
    const [count, setCount] = useState(1);

    return(
        <div>
            <h1 style={{textAlign: 'center', userSelect: 'none'}} onclick={() => {
              setCount(count + 1) 
            }}>{count}</h1>
        </div>
    )
}

render(<App />, root)