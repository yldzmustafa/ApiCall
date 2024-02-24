import './SearchHeader.css'

function SearchHeader({search}) {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        debugger;
        search('can')
    }

    return ( 
        <div className='SearchDiv'>
            <form onSubmit={handleFormSubmit}>
                <label>Ne arıyorsunuz?</label>
                <input/>
            </form>
        </div>
     );
}

export default SearchHeader;