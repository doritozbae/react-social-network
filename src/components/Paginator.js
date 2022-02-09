import styles from './Paginator.module.css';
import React, {useEffect, useState} from "react";
import cs from "./Paginator.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let [portionNumber, setPortionNumber] = useState(1)

    useEffect(() => {
        props.onPageChanged(firstPortionElement);
    }, [portionNumber])

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pages.length / props.portionSize);
    let firstPortionElement = (portionNumber - 1) * props.portionSize + 1;
    let lastPortionElement = portionNumber * props.portionSize;

    return <div className={styles.paginatorCont}>
        <h1>ldkm</h1>
        <div className={` ${cs.container} ${cs.pagesContainer} ` }>
            {portionNumber > 1 && <span className={cs.button} onClick={() => setPortionNumber(portionNumber - 1)}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </span>}
            {pages.map(p => {
                if (p >= firstPortionElement && p <= lastPortionElement)
                    return <span className={props.currentPage === p ? `${cs.page} ${cs.selectedPage}` : styles.page}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
            })}
            {portionNumber < portionCount
            && <span className={cs.button} onClick={() => setPortionNumber(portionNumber + 1)}>
          <FontAwesomeIcon icon={faChevronRight}/>
        </span>}
        </div>
    </div>
}

export default Paginator;