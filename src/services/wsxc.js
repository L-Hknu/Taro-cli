import { Get, Post } from '@/utils/axiosUtils'
import { MOCK } from './constants'
//注册请求
export function getUserBusinessList(id="1574767974968") {
    return Get(`${MOCK}/237900/example/${id}`);
}
export function getUserBusinessList1(params) {
    return Get(`${MOCK}/237900/example/1574767974968`,params);
}

