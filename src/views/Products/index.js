import { useState } from 'react';
import ListProducts from './ListProducts';
import DetailProducts from './DetailProducts';

const Products = (props) => {
  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState(null);

  return (
    <>
      <ListProducts {...props} setShowProduct={(data) => {setShowProduct(true); setProduct(data);}} />
      {showProduct && <DetailProducts product={product} setShowProduct={() => {setProduct(null); setShowProduct(false)}} />}
    </>
  )
}

export default Products