import React from 'react'

function Pagination({gotoNextPage,gotoPrevPage}) {
    return (
        <div className=" text-center my-3">
      {gotoPrevPage && <button onClick={gotoPrevPage} class="btn btn-primary mx-3">Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage} class="btn btn-primary">NEXT</button>}
    </div>
    )
}

export default Pagination
