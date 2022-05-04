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

  const data = props.isSearching ? props.data : products;
  return (
    <>
      {
        loading ?
          <>Loading...</>
        :
          <>
          {error && <div> {errorMessage} </div>}
          {data.map(p => 
            <div key={p.id}>
              <p>{p.id}</p>
              <p>{p.title}</p>
              <p>{p.price}</p>
              <p>{p.category}</p>
            </div>
          )}
          </>
      }
    </>
  );
}

export default ListProducts;