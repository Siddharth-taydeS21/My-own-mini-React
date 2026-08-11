import React from '/React'
import { render } from './ReactDom'

const root = document.getElementById('root')

const h1 = <h1>hii</h1>

const container = <div className='container' id='parent' title='parent container'>
    <h1 className='child'>Hello mini React</h1>
    <p className='child'>this is a paragraph</p>
</div>

const fruits = ['apple', 'mango', 'banana', 'peru'];

function Card({ title, image, brand, price }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{brand ? brand : 'Example brand'}</p>
                <p>
                    <b>${price}</b>
                </p>
            </div>
        </div>
    )
}

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        render(
            <div className="container">
                {data.products.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            title={product.title}
                            brand={product.brand}
                            price={product.price}
                            image={product.thumbnail}
                        />
                    )
                })}
            </div>,
            document.getElementById('root')
        )
    })

// render([container, 'hii', <Card title='My card' />], root);