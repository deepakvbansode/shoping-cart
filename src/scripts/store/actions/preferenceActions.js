export const SET_SEARCH = "SET_SEARCH";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SORT_BY = "SET_SORT_BY";


export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: { search}
});

export const setCategory = (categoryId) => ({
    type: SET_CATEGORY,
    payload: { categoryId }
});

export const setSortBy = (sortBy) => ({
    type: SET_SORT_BY,
    payload: { sortBy}
});