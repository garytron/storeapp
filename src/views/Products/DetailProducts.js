
const DetailsProducts = ({product, setShowProduct}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowProduct()}>&times;</span>
        <img src={product.image} alt={product.title}/>
        <p className='title'>{product.title}</p>
        <div className='container-left pull-left'>
        </div>
        <div className='container-right pull-right'>
          <p>${product.price}</p>
        </div>
        <div className="clearfix"/>
        <p className='description'>{product.description}</p>
        <p className='label'>{product.category}</p>
      </div>
    </div>
  )
}

export default DetailsProducts;