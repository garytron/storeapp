import { useEffect, useState } from 'react';
import { productsAPI } from '../../libs/api';

const ListProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const getProducts = async () => {
      try {
        const info = await productsAPI.getProducts();

        setProducts(info.data);
        props.setProducts(info.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setErrorMessage('Sorry! We encountered a problem while loading products list. Please, try again later.');
        setLoading(false);
      }
    }

    getProducts();
  },[]);

  let  data = props.isSearching ? props.data : products;
  data = props.isFiltered ? data.filter(d => d.category === props.category) : data;

  return (
    <>
      {
        loading ?
          <>Loading...</>
          :
          <>
          {error && <div> {errorMessage} </div>}
          <div className='container'>
            {data.map(p =>
            <div className='column' key={p.id} onClick={() => props.setShowProduct(p)}>
              <div className='card'>
                <img src={p.image} alt={p.title}/>
                <div className='card-container'>
                  <div className='container-left pull-left'>
                    <p className='title'>{p.title}</p>
                  </div>
                  <div className='container-right pull-right'>
                    <p>${p.price}</p>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          </>
      }
    </>
  );
}

export default ListProducts;