import React, { Children } from 'react'

const Container = ({ children, className }) => {
    return (
        <div className= {`container m-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container