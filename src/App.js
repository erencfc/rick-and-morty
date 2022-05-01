import "./App.css";

import { useState } from "react";

import Search from "./components/Search";
import Results from "./components/Results";
import Filter from "./components/Filter";

function App() {
    const [searchFilter, setSearchFilter] = useState("");

    return (
        <>
            <header className="header">
                <p className="title">Wubba Lubba Dub Dub.</p>
                <Search onSearch={setSearchFilter} />
            </header>

            <Filter />
            <Results searchFilter={searchFilter} />
        </>
    );
}

export default App;
