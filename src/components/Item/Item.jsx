import React from 'react'

function Item({prods}) {
   console.log(prods);
  return (
    <div>
        {
            prods.map((product) => {
                <div className="card-group">
                    <div className="card">
                        <img src={product.pictureImg}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-primary">{product.price}</a>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Item