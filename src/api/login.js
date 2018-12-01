import request from '@/utils/request'

export function getTest(params) {
    return request({
        url: '/u/register',
        method: 'get',
        params
    })
}