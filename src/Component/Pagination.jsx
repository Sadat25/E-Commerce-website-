import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Component/Card.jsx';
import { FaStar } from "react-icons/fa6";

const Pagination = ({ itemsPerPage, products }) => {

    const items = products

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((product) => (
                        <Card
                            key={product.id}
                            cardimg={product.thumbnail}
                            title={product.title}
                            price={Math.floor(product.price * (1 - product.discountPercentage / 100))}
                            lessprice={product.price}
                            less={Math.round(product.discountPercentage)}
                            star={<> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </>}
                            rating={product.rating}
                        />
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className="flex gap-2.5"
                pageLinkClassName="px-6.5 py-1.5 cursor-pointer rounded-sm bg-black text-white"
            />
        </>
    )
}

export default Pagination