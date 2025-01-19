import React,{useState} from 'react'

function Pagination({limit=10,setLimit,totalCount=0,currentPage=1,setCurrentPage}) {

  let pageNumberLimit = 3
  let [minPageNumberLimit,setMinPageNumberLimit] = useState(0)
  let [maxPageNumberLimit,setMaxPageNumberLimit] = useState(5)

  let pages = []
  //create number of pages based on totalCount and Limit 19.1 -> 20 19.9 -> 20
  for(let i=1;i<=Math.ceil(totalCount/limit);i++)
    pages.push(i)

  const handlePrev = ()=>{
    setCurrentPage(currentPage-1)
    if(currentPage-1 === minPageNumberLimit){
      setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit)
      setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit)
    }
  }

  const handleNext = ()=>{
    setCurrentPage(currentPage+1)
    if(currentPage + 1 > maxPageNumberLimit){
      setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit)//3
      setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)//8
    }
  }

  let pageDecrementBtn = null;
  let pageIncrementBtn = null;

  if(minPageNumberLimit!==0)
    pageDecrementBtn = <li><button onClick={handlePrev}>&hellip;</button></li>

  if(pages.length>maxPageNumberLimit)
    pageIncrementBtn = <li><button onClick={handleNext}>&hellip;</button></li>

 
  let start = (currentPage-1) * limit + 1 
  let end = totalCount < currentPage * limit ? totalCount : currentPage * limit

  
  const renderPageNumbers = pages.map((number)=>{
    if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit)
    {
      return <li key={number} onClick={()=>{setCurrentPage(Number(number))}} className={number === currentPage?"active":""}>
                <button>{number}</button>
            </li>
    }
  })

  return <div className='pagination-wrapper'>

    <div className='entries'>
      <label>Show</label>
      &nbsp;
      <select className='pagination-select' defaultValue={limit} onChange={(e)=>{setLimit(e.target.value);setCurrentPage(1)}}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      &nbsp;
      <label>Entries</label>
    </div>

    <div className='entries'>Showing {start} to {end} of {totalCount}</div>

    <div className='pagination-buttons'>
      <ul>
        <li><button onClick={()=>handlePrev()} disabled={currentPage===1}>Prev</button></li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li><button onClick={()=>handleNext()} disabled={currentPage === pages.length}>Next</button></li>
      </ul>
    </div>
  </div>
}

export default Pagination