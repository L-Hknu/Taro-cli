import { Get, Post } from '../utils/axiosUtils'
// export { ORDER_LIST } from './constants'

export function getUserBusinessList(id="1574767974968") {
    return Get(`/237900/example/${id}`);
}

