import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body:data,
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body:data,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            }),
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),

        updatePassWord: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),

        contactUs: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/contactus`,
                method: 'POST',
                body:data,
            }),
        }),

    }),
});

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateProfileMutation, useContactUsMutation, useUpdatePassWordMutation } = usersApiSlice; 