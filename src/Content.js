import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {




/* const [click, setClick] = useState(null)
const [previousId, setPreviousId] = useState('')




const checkDoubleClick = (id) => {

    if(click===null){
        console.log('previousId',id)

               const timeOut=setTimeout(() => {
                      clearTimeout(click)
                }, 2000)
 
                setClick(timeOut)
                setPreviousId(id)
    
    }else{
        console.log('newid',id)

       if(previousId===id) handleCheck(id)
        clearTimeout(click)
        setClick(null)
        setPreviousId("")


    }
}

 */



    

  return <>
          {items.length ? (
                             <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>                          ) : (
                                <p style={{marginTop: '2rem'}}> Your list is empty.</p>
                            )}
        </>;
};

export default Content;
