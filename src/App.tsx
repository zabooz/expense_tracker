import { useState } from 'react'
import List from './components/List'
import Form from './components/Form'

interface Item{
  description:string,
  amount:number,
  category:string
  id:number

}


function App() {

  const [itemList, setItemList] = useState<Item[]>([])

  
  const onSubmit = (item:Item) => {

    setItemList([...itemList,
      item
    ])

    console.log(itemList)

  }
  const onRemove = (id:number) => {
    setItemList(itemList.filter(item => item.id !== id))
  }






  return(
    <>
    <Form onSubmit= {onSubmit}></Form>
    <List
      itemList  ={itemList}
      onRemove={onRemove}
    >
    </List>
    </>
  )

}

export default App
