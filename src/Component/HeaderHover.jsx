import { ListItem } from './ListItem'

const HeaderHover = ({ children, className }) => {
    return (
        <ListItem className={`p-2 hover:bg-gray-100 rounded-md ${className}`}>{children}</ListItem>
    )
}

export default HeaderHover