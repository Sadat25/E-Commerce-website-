import { ListItem } from './ListItem'

const HeaderHover = ({ children, className, onClick }) => {
    return (
        <ListItem className={`p-2 hover:bg-gray-100 rounded-md ${className}`} onClick={onClick}>{children}</ListItem>
    )
}

export default HeaderHover