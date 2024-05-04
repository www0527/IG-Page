import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGPost, IGStory } from "type/dataType";

export const homeApi = createApi({
    // API的名稱
    reducerPath: "homeApi",
    // 連結的API基本路徑
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
    // 方法
    endpoints: (builder) => ({
        // query 需要傳兩個泛型的結果
        // 1. IGStory：response 的結果
        // 2. number | "all"：獲取資料時要使用的參數
        getIGPosts: builder.query<IGPost[], number | "all">({
            query: (id) => {
                if (id !== "all") {
                    return `posts/${id}`;
                }
                return "posts";
            },
        }),
        getIGStories: builder.query<IGStory[], number | "all">({
            query: (id) => {
                if (id !== "all") {
                    return `stories/${id}`;
                }
                return "stories";
            },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIGPostsQuery, useGetIGStoriesQuery } = homeApi;
export const homeApiReducer = homeApi.reducer