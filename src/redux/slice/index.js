import { createSlice } from "@reduxjs/toolkit";
import articlesData from '../articlesData';

const initialState = {
    articles: articlesData,
    pagination: {
        page: 1,
        itemsPerPage: 6,
        count: Math.ceil(articlesData.length / 6)
    }
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        // pages update
        setArticles(state, action) {
            state.articles = action.payload;
            state.pagination.count = Math.ceil(action.payload.length / state.pagination.itemsPerPage);
        },
        // current page
        setPage(state, action) {
            state.pagination.page = action.payload;
        },
        // prev page
        prevPage(state) {
            if (state.pagination.page > 1) {
                state.pagination.page -= 1;
            }
        },
        // next page
        nextPage(state) {
            if (state.pagination.page < state.pagination.count) {
                state.pagination.page += 1;
            }
        }
    }
});
// The selector to update is based on the current page
export const selectCurrentArticles = ({ article: { pagination, articles } }) => {
    const start = (pagination.page - 1) * pagination.itemsPerPage;
    const end = pagination.page * pagination.itemsPerPage;
    return articles.slice(start, end).map(({ id, title, image, author, date, abstract, categories }) => ({
        id, title, image, author, date, abstract, categories,
    }));
};

// Selector to get the last 4 articles
export const selectLastFourArticles = (state) =>
    state.article.articles.slice(-4).map(({ id, title, image, author, date, abstract, categories }) => ({
        id, title, image, author, date, abstract, categories,
    }));

// Selector to get 3 articles
export const selectThreeArticles = (state) =>
    state.article.articles.slice(0, 3)
        .map(({ id, title, image, author, date, abstract, categories }) => ({
            id, title, image, author, date, abstract, categories,
        }));

// selector to get nine articles excluding current
export const nineAriclesExcludingCurrent = (state, id) =>
    state.article.articles
        .filter(article => article.id !== id)
        .slice(0, 9)
        .map(({ id, title, image, author, date, abstract, categories }) => ({
            id, title, image, author, date, abstract, categories,
        }));



// Selector to get sections for a specific article by its ID
export const selectSectionsByArticleId = (state, id) => {
    const article = state.article.articles.find(article => article.id === id);
    return article ? article.sections : [];
};


// Selector to get specific details from the current article
export const detailCurrentArticle = (state, id) => {
    const article = state.article.articles.find(article => article.id === id);
    const { title, image, date, day, abstract, categories } = article;
    return { id, title, image, date, day, abstract, categories };
};


export const { setArticles, setPage, prevPage, nextPage } = articleSlice.actions;
export default articleSlice.reducer;
