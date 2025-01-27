import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"

function CarSearch() {
const searchTerm=useSelector((state)=>{
  return state.cars.searchTerm
})
const dispatch=useDispatch()

  const handleSearchChange=(e)=>{
    dispatch(changeSearchTerm(e.target.value))
  }
  return (
    <div className="list-header">
      <h3 className="title is-3">لیست من</h3>
      <div className="search field is-horizontal">
        <label style={{width:'100px'}} className="lable">جست و جو</label>
        <input className="input" value={searchTerm} onChange={handleSearchChange} />
      </div>
    </div>
  )
}

export default CarSearch
