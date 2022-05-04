
const Search = (props) => {
  const onChange =(e) => {
    const word = e.target.value.toLowerCase();
    const data = props.data.filter(d => d.title.toLowerCase().includes(word));

    const isSearching = word.length > 0;
    props.setFilteredData(data, isSearching);
  }

  return (
    <div>
      <input type="text" placeholder={props.text} onChange={onChange}></input>
    </div>
  )
}

export default Search;