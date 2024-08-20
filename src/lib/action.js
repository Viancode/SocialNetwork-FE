"use server";
import {cookies} from "next/headers";
import http from "./axios";

export async function refreshAccessToken() {
    const refresh_token = cookies().get("refresh-token")?.value;
    if (refresh_token) {
        return await http
            .post("/auth/refresh", null, {params: {refresh_token}})
            .then((res) => {
                cookies().set("access-token", res.data.result.data.accessToken, {maxAge: process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRY});
                return {
                    isSuccessful: true,
                    data: res.data.result.data
                }
            })
            .catch((err) => {
                return {
                    isSuccessful: false,
                }
            });
    }
}

export async function login(loginForm) {
    const {email, password} = loginForm;
    return await http
        .post("/auth/login", {email, password})
        .then((res) => {
            const data = res.data.result.data
            cookies().set("access-token", data.accessToken, {maxAge: process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRY});
            cookies().set("refresh-token", data.refreshToken, {maxAge: process.env.NEXT_PUBLIC_ACCESS_REFRESH_EXPIRY});
            return {
                isSuccessful: true,
            }
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function register(registerForm) {
    return await http
        .post("/auth/register", registerForm)
        .then((res) => {
            console.log(res.data)
            return {
                isSuccessful: true,
                message: res.data.message
            }
        })
        .catch((err) => {
            console.log(err.data)

            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function verifyRegister(token) {
    return await http
        .post(`/auth/register/verify?token=${token}`)
        .then((res) => {
            return {
                isSuccessful: true,
                message: res.data.message
            }
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function logout() {
    const refreshToken = cookies().get("refresh-token")?.value;
    if (refreshToken) {
        cookies().delete('refresh-token');
        cookies().delete('access-token');
        return await http
            .post("/auth/logout", {params: {refreshToken}})
            .then((res) => {
                return {
                    isSuccessful: true,
                    message: res.data.message
                }
            })
            .catch((err) => {
                return {
                    isSuccessful: false,
                    message: err.response.data.message
                }
            });
    }
}

export async function changePassword(new_password, old_password) {
    return await http
        .post("/auth/change_pass", null, {params: {new_password, old_password}})
        .then((res) => {
            return {
                isSuccessful: true,
            }
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function verifyChangePassword(token) {
    return await http
        .post(`/auth/verify_forgot_pass`, null, {params: {token}})
        .then((res) => {
            return {
                isSuccessful: true,
            }
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function forgotPassword(email) {
    return await http
        .post("/auth/forgot_pass", null, {params: {email}})
        .then((res) => {
            return {
                isSuccessful: true,
                message: res.data.message
            }
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function resetPassword(new_password, token) {
    return await http
        .post("/auth/reset_pass", null, {params: {new_password, token}})
        .then((res) => {
            return {
                isSuccessful: true,
            }
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            }
        });
}

export async function reactPost(postId) {
    console.log("postId", postId)
    return await http
        .post(`/post_reaction`, {postId: postId, reactionType: "LIKE"})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function reactComment(commentId) {
    return await http
        .post(`/comment_reaction`, {commentId: commentId, reactionType: "LIKE"})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function deleteRequestFriend(userId) {
    return await http
        .delete(`/friend/delete_request`, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function acceptRequestFriend(userId) {
    return await http
        .post(`/friend/accept_request`, null, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function rejectRequestFriend(userId) {
    return await http
        .post(`/friend/refuse_request`, null, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function unFriend(userId) {
    return await http
        .delete(`/friend/delete_friend`, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function unBlock(userId) {
    return await http
        .post(`/friend/unblock`, null, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function sendRequestFriend(userId) {
    return await http
        .post(`/friend/send_request`, null, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function block(userId) {
    return await http
        .post(`/friend/block`, null, {params: {user_id: userId}})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}

export async function setCloseRelation(userId, closeRelationship) {
    return await http
        .post(`/close_relationship`, {targetUserId: userId, closeRelationshipName: closeRelationship})
        .then((res) => {
            return {
                isSuccessful: true,
                data: res.data.result
            };
        })
        .catch((err) => {
            return {
                isSuccessful: false,
                message: err.response.data.message
            };
        });
}



