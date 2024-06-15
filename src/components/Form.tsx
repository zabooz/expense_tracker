import { useState,useRef } from "react";


interface Item{
  description:string,
  amount:number,
  category:string
  id:number

}
interface Props{
  onSubmit : (item:Item) => void
}


function Form({onSubmit}:Props) {
  const [item, addItem] = useState({
    description: "",
    amount: 0,
    category: "groceries",
    id:0
  });

  const description= useRef(null)
  const amount= useRef(null)
  const category = useRef(null)

 


  return (
    <form className="mb-4" onSubmit={(e) => {
      e.preventDefault()
      addItem({...item,
        id:Date.now()
      })
      onSubmit(item)
      
    
    }}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          id="description"
          className="form-control"
          ref={description}
          onChange={(e) => addItem({...item,description:e.target.value})}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="form-control"
          ref={amount}
          onChange={(e) => addItem({...item,amount:+e.target.value})}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label"
        >
          Category
        </label>
        <select
          name="category"
          ref={category}
          id="category"
          className="form-select"
          onChange={(e) => addItem({...item,category:e.target.value})}
        >
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
      </div>
      <button type="submit"  className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
