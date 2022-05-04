import { useEffect, useState } from 'react';
import { categoriesAPI } from '../../libs/api';

const ListCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const getData = async () => {
      try {
        const info = await categoriesAPI.getCategories();

        setCategories(info.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setErrorMessage('Sorry! We encountered a problem while loading categories list. Please, try again later.');
        setLoading(false);
      }
    }

    getData();
  },[]);

  return (
    <>
      {
        loading ?
          <>Loading...</>
        :
          <>
          {error && <div> {errorMessage} </div>}
          {categories.map(category => 
            <div key={category}>
              <p>{category}</p>
            </div>
          )}
          </>
      }
    </>
  );
}

export default ListCategories;