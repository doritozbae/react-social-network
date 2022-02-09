import React, {useEffect, useState} from "react";
import classes from "./Paginator.module.css";
import cn from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


// let Paginator = (props) => {
//     let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }

//     let portionCount = Math.ceil(pages.length / props.portionSize);
//     const [portionNumber, setPortionNumber] = useState(1);
//     let firstPortionElement = (portionNumber - 1) * props.portionSize + 1;
//     let lastPortionElement = portionNumber * props.portionSize;

//     return <div className={cs.paginatorCont}>
//         <h1>ldkm</h1>
//         <div className={` ${cs.container} ${cs.pagesContainer} ` }>
//             {portionNumber > 1 && <span className={cs.button} onClick={() => setPortionNumber(portionNumber - 1)}>
//             {/* <FontAwesomeIcon icon={faChevronLeft}/> */}
//         </span>}
//             {pages.map(p => {
//                 if (p >= firstPortionElement && p <= lastPortionElement)
//                     return <span className={props.currentPage === p ? `${cs.page} ${cs.selectedPage}` : cs.page}
//                                  onClick={() => {
//                                      props.onPageChanged(p);
//                                  }}>{p}</span>
//             })}
//             {portionNumber < portionCount
//             && <span className={cs.button} onClick={() => setPortionNumber(portionNumber + 1)}>
//           {/* <FontAwesomeIcon icon={faChevronRight}/> */}
//         </span>}
//         </div>
//     </div>
// }

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 19 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
  
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
  
    return <div className={classes.paginator}>
    <p>Users</p>
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
      {
        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
          return <span className={cn({ [classes.selectedPage]: currentPage === p }, classes.pageNumber)}
            key={p}
            onClick={(e) => { onPageChanged(p) }}>{p}</span>
        })}
      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
  }

export default Paginator;