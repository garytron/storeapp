import { useState } from 'react';
import Products from './Products';
import Categories from './Categories';
import Search from '../components/Search';

const App = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  let [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  data = isSearching ? filteredData : data;
  return (
    <>
      <Search data={data} placeholder="Type a name..." setFilteredData={(filteredData, isSearching) => {setFilteredData(filteredData); setIsSearching(isSearching)}}  />
      <Categories setIsFiltered={(isFiltered) => setIsFiltered(isFiltered)} setCategory={(category) => setCategory(category)} />
      <div className='clearfix' />
      <Products data={data} isSearching={isSearching} isFiltered={isFiltered} category={category} setProducts={(products) => setData(products)}/>
    </>
  )
}

export default App;