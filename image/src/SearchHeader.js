import './SearchHeader.css'
import { useState } from 'react';

function SearchHeader({search}) {

    const [valueInput, setValueInput] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        debugger;
        search(valueInput)
    }

    const handgleChange = (event) => {
        setValueInput(event.target.value)
    }

    return ( 
        <div className='SearchDiv'>
            <form onSubmit={handleFormSubmit}>
                <label>Ne arıyorsunuz?</label>
                <input value={valueInput} onChange={handgleChange}/>
            </form>
        </div>
     );
}

export default SearchHeader;