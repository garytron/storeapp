
const Search = (props) => {
  const onChange =(e) => {
    const word = e.target.value.toLowerCase();
    const data = props.data.filter(d => d.title.toLowerCase().includes(word));

    const isSearching = word.length > 0;
    props.filteredData(data, isSearching);
  }

  console.log(props.data);
  return (
    <div>
      <input type="text" placeholder={props.text} onChange={onChange}></input>
    </div>
  )
}

export default Search;