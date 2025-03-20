
import axios from 'axios'
import axiosInstance from './base'
import { TOTP } from "totp-generator"
import * as base32 from 'hi-base32'
const key = process.env.NEXT_PUBLIC_AUTH_SECRET_KEY
const base32Key = base32.encode(key)
const {otp} = TOTP.generate(base32Key, {
    digits: 8,
    algorithm: "SHA-512",
    period: 15
})

export const registerUser = async ({email, password}) => {
    try {
        const response = await axiosInstance.post(`/Auth/Register`, {
            email,
            password
        }, {
            headers: { Sign: otp },
            validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data,
        }
    } catch (error) {
        return {
            status: false,
            data: {
                vi: 'Người dùng đã tồn tại',
                en: 'User already exists'
            } 
        }
    }
}
export const loginUser = async ({email, password}) => {
    try {
        const response = await axiosInstance.post(`/Auth/Login`, {
            email,
            password
        }, {
            headers: { Sign: otp },
            validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data,
        }
    } catch (error) {
        return {
            status: false,
            data: {
                vi: 'Người dùng đã tồn tại',
                en: 'User already exists'
            } 
        }
    }
}
export const forgotPassword = async ({email, domain}) => {
    try {
        await axiosInstance.post(`/Auth/ForgotPassword`, {
            email,
            domain
        }, { 
            headers: { Sign: otp },
            validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
        }
    } catch (error) {
        return {
            status: false,
        }
    }
}
export const changePassword = async ({currentPassword, newPassword, token}) => {
    try {
        await axiosInstance.post(`/Auth/ChangePassword`, {
            currentPassword,
            newPassword,
        }, { headers :{
            'Authorization': `Bearer ${token}`,
            Sign: otp
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
        }
    } catch (error) {
        return {
            status: false,
        }
    }
}

export const postResetPassword = async ({token, email, newPassword}) => {
    try {
        const response = await axiosInstance.post(`/Auth/ResetPassword`,{
            email,
            newPassword,
            token
        }, {
            // params: {
            //     domain
            // },
            headers :{
            // 'Authorization': `Bearer ${token}`
            Sign: otp,
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: null
        }
    }
}

export const getEvents = async ({displayStatus, groupType, source}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetEvents`, { params: {
            displayStatus,
            groupType,
            source,
        },
        headers: { Sign: otp }
        , validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data,
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}
export const getEventDetail = async ({code, source}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetEventDetail`, { params: {
            code,
            source,
        },
        headers: { Sign: otp },
        validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data,
        }
    } catch (error) {
        return {
            status: false,
            data: null
        }
    }
}
export const getPhotos = async ({ page, eventCode, query, face, token }) => {
    try {
        const response = await axiosInstance.get('/Main/GetPhotos', {
            headers: {
                'Authorization': `Bearer ${token}`,
                Sign: otp 
            },
            params: {
                eventCode: eventCode,
                currentPage: page,
                query: query,
                pageSize: 24,
                sort: true,
                face: face
            },
            validateStatus: (status) => status === 200 || status === 204
        })
        return {
            status: true,
            data: response.data,
            message: response.statusText
        }
    } catch (error) {
        return {
            status: false,
            data: null,
            message: error?.message ?? 'Error while getting photos'
        }
    }
}

export const uploadFile = async ({base64, token, name, userId}) => {
    try {
        const response = await axios.post('https://z7fqm2zcr6.execute-api.us-west-2.amazonaws.com/prod/uploadsearch',
        {
            image: base64,
            filename: name,
            userid: userId
        }, 
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                Sign: otp
            }
        })
        return {
            status: true,
            data: response.data,
            message: 'uploading file success'
        }
    } catch (error) {
        return {
            status: false,
            data: null,
            message: 'uploading file error'
        }
    }
}

export const getUserFaces = async ({token}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetUserFaces`, {
            headers :{
            'Authorization': `Bearer ${token}`,
            Sign: otp
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}
export const getUserTransactions = async ({token}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetUserTransactions`, {
            headers :{
            'Authorization': `Bearer ${token}`,
            Sign: otp 
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}
export const getPackages = async ({eventCode}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetPackages`, {
            params: {
                eventCode: eventCode
            },
            headers: { Sign: otp },
            validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}
export const getUserInfo = async ({token}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetUserInfo`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Sign: otp
            },
            validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}
export const postInitTransaction = async ({token, eventCode, query, face, items, type,packageCode}) => {
    try {
        const response = await axiosInstance.post(`/Main/InitTransaction`,{
            eventCode,
            query,
            face,
            items,
            type,
            packageCode
        }, {
            headers :{
            'Authorization': `Bearer ${token}`,
            Sign: otp 
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: null
        }
    }
}
export const postRemoveFace = async ({token, faceId}) => {
    try {
        const response = await axiosInstance.post(`/Main/RemoveFace`,{
            faceId
        }, {
            headers :{
            'Authorization': `Bearer ${token}`,
            Sign: otp 
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: null
        }
    }
}

export const postCreateContactForm = async ({email, phone, content}) => {
    try {
        const response = await axiosInstance.post(`/Main/CreateContactForm`,{
            email,
            phone,
            content
        }, 
        {
            headers: { Sign: otp },
            validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: null
        }
    }
}
export const postUpdateUserInfo = async ({email, phone, fullName,token}) => {
    try {
        const response = await axiosInstance.post(`/Main/UpdateUserInfo`, {
            email,
            phone,
            fullName
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                Sign: otp 
            },
            validateStatus: (status) => status === 200 || status === 204
        })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: null
        }
    }
}
export const getBanners = async ({domain}) => {
    try {
        const response = await axiosInstance.get(`/Main/GetBanners`, { params: {
            domain,
        },
        headers: { Sign: otp }
        , validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data,
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}
export const getGoogleLoginRedirect = async ({authorizationCode, redirectUri}) => {
    try {
        const response = await axiosInstance.post(`/Auth/GoogleLoginRedirect`, {
            authorizationCode,
            redirectUri
        },{
            headers :{
            Sign: otp
        }, validateStatus: (status) => status === 200 || status === 204 })
        return {
            status: true,
            data: response.data
        }
    } catch (error) {
        return {
            status: false,
            data: []
        }
    }
}