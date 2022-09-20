import './styles.css'

export const TextInput= ({searchValue,hendleChange}) =>{
    return(
<input    className="search-input"
          onChange={hendleChange}
          value={searchValue}
          type="search"/>
)}
