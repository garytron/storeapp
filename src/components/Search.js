
const Search = (props) => {
  const onChange =(e) => {
    const word = e.target.value.toLowerCase();
    const data = props.data.filter(d => d.title.toLowerCase().includes(word));

    const isSearching = word.length > 0;
    props.setFilteredData(data, isSearching);
  }

  return (
    <div>
      <input className="search" type="text" placeholder={props.placeholder} onChange={onChange}></input>
    </div>
  )
}

export default Search;