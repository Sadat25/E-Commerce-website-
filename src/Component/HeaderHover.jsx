import { ListItem } from './ListItem'

const HeaderHover = ({ children, className }) => {
    return (
        <ListItem className={`py-2 px-3 hover:bg-gray-100 rounded-md ${className}`}>{children}</ListItem>
    )
}

export default HeaderHover