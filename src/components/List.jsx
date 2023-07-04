import React from 'react'

 const List = ()=> {
    const user = [
        {id:"1",userName:"axioned",add:"xyz"},
        {id:"2",userName:"axioneds",add:"xyzs"},
        {id:"3",userName:"axioneded",add:"xyzz"}
    ]
  return (
    <ul>
        {
            user.map(element=>{
                return(

                    <li key = {element.id}>{element.userName}</li>
                )
            })
        }
      
    </ul>
  )
}
export default List