

 export default function Searchbar({handleOnChange, inputSearch, handleSearch}) {

     return(
         <>
         <form onSubmit={handleSearch} className="d-flex bg-light searchform">
             <input className="form-control me-2" type="text" required placeholder="Search for a Pokemon name or ID" onChange={handleOnChange} value={inputSearch}></input>
             <input type="submit" value="Search" className="btn btn-secondary btn-outline-warning"></input>
         </form>
         </>
     )
 }