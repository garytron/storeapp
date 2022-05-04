import { useState } from 'react';
import Products from './Products';
import Categories from './Categories';
import Search from '../components/Search';

const App = () => {
  const [isSearching, setIsSearching] = useState(false);
  let [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  data = isSearching ? filteredData : data;
  return (
    <>
      <Search data={data} filteredData={(filteredData, isSearching) => {setFilteredData(filteredData); setIsSearching(isSearching)}}  />
      <Categories />
      <Products data={data} isSearching={isSearching} setProducts={(products) => setData(products)}/>
    </>
  )
}

export default App;