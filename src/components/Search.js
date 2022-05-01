import { Input } from "antd";
import "antd/dist/antd.min.css";

const { Search: S } = Input;

function Search({ onSearch }) {
    return (
        <S
            className="search"
            onSearch={(value) => onSearch(value)}
            placeholder="Search for a character..."
            size="large"
            enterButton
        />
    );
}

export default Search;
