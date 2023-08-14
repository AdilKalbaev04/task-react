import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flatSlice = createSlice({
  name: "flat",
  initialState: {
    basket: [],
    count: 0,
    zoom: false,
    price: false,
    trush: [],
  },
  reducers: {
    addBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    countAdd: (state) => {
      state.count++;
    },
    countAddTwo: (state) => {
      state.count += 99000;
    },
    countAddTwoRemove: (state) => {
      state.count -= 99000;
    },
    countAddTree: (state) => {
      state.count += 49000;
    },
    countAddTreeRemove: (state) => {
      state.count -= 49000;
    },
    countAddFour: (state) => {
      state.count += 19000;
    },
    countAddFourRemove: (state) => {
      state.count -= 19000;
    },
    countAddFive: (state) => {
      state.count += 299000;
    },
    countAddFiveRemove: (state) => {
      state.count -= 299000;
    },
    countAddSix: (state) => {
      state.count += 19000;
    },
    countAddSixRemove: (state) => {
      state.count -= 19000;
    },
    zoomTrue: (state) => {
      state.zoom = true;
    },
    zoomFalse: (state) => {
      state.zoom = false;
    },
    removeTask: (state, action) => {
      const index = state.basket.findIndex((item) => {
        return item.id === action.payload;
      });
      const [removed] = state.basket.splice(index, 1);
      state.trush.push(removed);
      state.count--;
    },
  },
});

export const {
  countAddTwo,
  addBasket,
  countAddFive,
  countAddTwoRemove,
  countAddSix,
  countAddSixRemove,
  countAdd,
  countAddFourRemove,
  countAddTreeRemove,
  zoomFalse,
  countAddFiveRemove,
  zoomTrue,
  countAddFour,
  countAddTree,
  removeTask,
} = flatSlice.actions;

export const restoApi = createApi({
  reducerPath: "restorauntsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api/" }),
  endpoints: (builder) => ({
    getFlats: builder.query({
      query: () => "flats?populate=images",
    }),
    getCards: builder.query({
      query: () => "cards?populate=images",
    }),
    getServices: builder.query({
      query: () => "services?populate=images",
    }),
    getCardById: builder.query({
      query: (id) => `cards/${id}?populate=images`,
    }),
    postOrder: builder.mutation({
      query: (data) => ({
        url: "datas",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetFlatsQuery,
  useGetCardsQuery,
  useGetServicesQuery,
  useGetCardByIdQuery,
  usePostOrderMutation,
} = restoApi;
