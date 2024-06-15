

import {useState,useRef} from 'react'
interface Props{
    itemList: Item[]
    onRemove: (id:number) => void
}
interface Item{
    description:string,
    amount:number,
    category:string
    id:number
  
  }


function List({itemList,onRemove}:Props) {

    const [filtered,setFilter] = useState('all')
    const filterRef = useRef(null)

    const handleFilter = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value)
    }


  const filteredItems = filtered === 'all' ? itemList : itemList.filter(item => item.category === filtered)

   const tableRows = filteredItems.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <th>
                <button
                className='btn btn-danger'
                onClick={() => onRemove(item.id)}
                >delete</button>
                </th>
            </tr>
        )
    
    
    })

    const sum =  itemList.reduce((a,b) => a + b.amount,0)


  return (
    <>
      <select name="filter" id="filter"
      ref={filterRef}
      onChange={(e)=> handleFilter(e)}
      className="form-select mb-4">
        <option value="all" className="form-option">
          All Categories
        </option>
        <option value="groceries" className="form-option">
          Groceries
        </option>
        <option value="utilities" className="form-option">
          Utilities
        </option>
        <option value="entertainment" className="form-option">
          Entertainment
        </option>
      </select>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {tableRows}
            <tr>
                <th>Total</th>
                <th>{sum}</th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
      </table>
    </>
  );
}

export default List;
