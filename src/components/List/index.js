import React from 'react';

//Lists for <ul> 
// 0) -> 
// 1) -> <a></a>
// 2) -> <img />

//ARGUMENTS:
//element -> component name (ex. p, h2, span, etc.)
//class -> class name (for all/main list(ul) in this component)
//lists -> an object that contains a list of all the required values
//  LISTS ARGUMENTS:
//      id      -> identifier
//      href    -> element reference (for <a></a>)
//      text    -> text for element (for <a></a> or "")
//      class   -> class name (for <img />)
//      src     -> element reference (for <img />)
const List = (props) => {
    return (
        <ul className={props.class}>
        {   props.element === undefined ?   props.lists.list.map(list => { 
                return <li key={list.id}>{list.text}</li>
            })
            :   props.element === 'img' ?   props.lists.list.map(list => { 
                    return <li key={list.id}><props.element alt='Icons' className={list.class} src={list.src} /></li>
                })
            :   props.element === 'a' ?    props.lists.list.map(list => { 
                    if(list.href == props.currentPage){
                        if(list.href == '/'){
                            return <li key={list.id} className='current-page left'><props.element href={list.href}>{list.text}</props.element></li>
                        }
                        else if(list.href == '/login' || list.href == '/registration'){
                            return <li key={list.id} className='current-page right'><props.element href={list.href}>{list.text}</props.element></li>
                        }
                        else{
                            return <li key={list.id} className='current-page'><props.element href={list.href}>{list.text}</props.element></li>
                        }
                    }else{
                        return <li key={list.id}><props.element href={list.href}>{list.text}</props.element></li>
                    }
            })
            :   <span></span>
        }
        </ul>
    );
}

export default List;