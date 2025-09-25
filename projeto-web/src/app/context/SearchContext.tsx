"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
    search: string;
    setSearch: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({children}: {children: ReactNode}) {
    const [search, setSearch] = useState("bagdad");

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("Use Context");
    return ctx;
}