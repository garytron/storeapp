
const Card = ({product, setShowProduct}) => 
<div className='column' onClick={() => setShowProduct(product)}>
  <div className='card'>
    <img src={product.image} alt={product.title}/>
    <div className='card-container'>
      <div className='container-left pull-left'>
        <p className='title'>{product.title}</p>
        <p className='label'>{product.category}</p>
      </div>
      <div className='container-right pull-right'>
        <p>${product.price}</p>
      </div>
    </div>
  </div>
</div>

export default Card;