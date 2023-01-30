import ReactPaginate from 'react-paginate';
import axios from 'axios';

export default function Pagination ({setPokemons, totalCount}) {


    const offset = 20
    const pageCount = Math.ceil(totalCount/offset)
    // to calculate the needed number of pages 
    // pageCount will be set as an attribute in the return

    const fetchNewPage = (offset) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then((response) => {
        setPokemons(response.data.results)
        console.log(response.data.results) // pagination: response.data.results = items

    })
    .catch((err) => {
        console.log(err)
    })
   }

    const handlePageClick = (data) => {
        console.log(data.selected) // prints the page -1 
        let offset = (data.selected+1) * 20 // offset = 20 -> multiple page number = new offset
        console.log(offset)
        fetchNewPage(offset)
    }

    return(
        <ReactPaginate
        previousLabel={'<<'} // which word for back
        nextLabel={'>>'} // which word for next
        breakLabel={'...'} // how the break looks like
        pageCount={pageCount} // how many pages
        marginPagesDisplayed={3} // how many pages after breakLabel
        pageRangeDisplayed={3} // how many pages between breakLabel
        onPageChange={handlePageClick}
        containerClassName={'pagination pagination-sm justify-content-center'} // className for Container STYLING FROM BOOTSTRAP
        pageClassName={'page-item'} // className for item
        pageLinkClassName={'page-link'} // className for link
        previousClassName={'page-item'} // className for previous button
        previousLinkClassName={'page-link'}// className for previous link
        nextClassName={'page-item'} // className for next button
        nextLinkClassName={'page-link'}// className for next link
        breakClassName={'page-item'} // className for break button
        breakLinkClassName={'page-link'}// className for break link
        activeClassName={'active'} // className for active page
        />

    )
}