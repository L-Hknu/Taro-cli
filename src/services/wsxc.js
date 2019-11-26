import { Get, Post } from '../utils/axiosUtils'
// export { ORDER_LIST } from './constants'

export function getUserBusinessList() {
    return Get(`/applay/pass`);
}

