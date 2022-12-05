import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";


interface Props {
    setskip: React.Dispatch<React.SetStateAction<number>>,
    data: any
}


const AppPagination: React.FC<Props> = ({ setskip, data }) => {

    const [pageCount, setpageCount] = useState(10)

    const handlePageClick = (page: any) => {
        let N = page.selected + 1;
        setskip(N);

        console.log(N, "@active user data")
    }



    useEffect(() => {
        setpageCount(data ? data?.totalResults / data?.limit : 0)
    }, [data])
    return (
        <>
            {pageCount > 1 && (
            <div className="pagination-wrapper mt-2">
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
             )} 
        </>
    )
}

export default AppPagination
