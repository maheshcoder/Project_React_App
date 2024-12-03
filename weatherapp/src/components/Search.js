import '../styles/components/Search.scss';

function Search() {
  return (
    <>
      <div className='Search-container'>
        <div className='search-icons'>
          <i className='bi bi-search'></i>
        </div>
        <div className='search-input'>
          <input
            type='text'
            name='search-input'
            placeholder='Search city ...'
        
          />
        </div>
      </div>
    </>
  );
}

export default Search;
