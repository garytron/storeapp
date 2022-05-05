import { useEffect, useState } from 'react';
import { categoriesAPI } from '../../libs/api';

const ListCategories = (props) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
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

  const onClickCategory = (category) => {
    props.setCategory((prevCategory) => {
      if(prevCategory !== category){
        props.setIsFiltered(true);
      }else{
        props.setIsFiltered((value) => !value);
      }
      return category;
    });

    setCategory((prevCategory) => (prevCategory !== category) ? category : null);

  }

  const styles = {color: "#fff", backgroundColor: "rgb(124, 91, 91)"};
  return (
    <>
      {
        loading ?
          <>Loading...</>
          :
          <>
          {error && <div> {errorMessage} </div>}
          {categories.map(c => 
            <div className="categories" style={c === category ? styles : {}} key={c} onClick={() => onClickCategory(c)}>
              <p>{c}</p>
            </div>
          )}
          </>
      }
    </>
  );
}

export default ListCategories;