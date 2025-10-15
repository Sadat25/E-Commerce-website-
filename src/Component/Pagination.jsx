import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Component/Card.jsx';
import { FaStar } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Rate } from "antd";

const Pagination = ({ itemsPerPage }) => {

    const allProducts = useSelector((state) => state.AllProducts.value)
    
    const items = allProducts

    function Items({ currentItems }) {
        return (
            <>
                {currentItems && currentItems.map((items) => (
                    <Card
                        id={items.id}
                        key={items.id}
                        productDetails={items}
                        cardimg={items.thumbnail}
                        title={items.title}
                        price={Math.floor(items.price * (1 - items.discountPercentage / 100))}
                        lessprice={items.price}
                        less={Math.round(items.discountPercentage)}
                        star={<Rate allowHalf defaultValue={items.rating} />}
                        rating={items.rating}
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