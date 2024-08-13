import provinces from './province.json';
import http from "@/lib/axios";

export function getProvince() {
    return provinces.sort((a, b) => a.province_name.localeCompare(b.province_name));
}

export async function getUserProfile(target_user_id) {
    return await http
        .get('profile', {params: {target_user_id}})
        .then((res) => {
            return {
                isAllowed: true,
                data: res.data.result.data
            };
        })
        .catch((err) => {
            return {
                isAllowed: false,
                message: err.response.data.message
            };
        });
}

export async function getUserPostCount() {
    return await http
        .get('post/number_post')
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result.data
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        })
}

export async function getUserFriendCount() {
    return http
        .get('friend/number_of_friends')
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result.data
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        })
}

export async function getSuggestFriend(page = 1) {
    return http
        .get('friend/view_suggest', {params: {page}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result.data
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        })
}

export async function getUserPost(page = 1, target_user_id) {
    return http
        .get('post', {params: {page, target_user_id}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result.data
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        })
}

export async function getCommentInPost(page = 1, post_id) {
    return http
        .get('comment', {params: {page, post_id}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result.data
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        })
}