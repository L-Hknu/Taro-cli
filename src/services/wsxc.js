import { Get, Put } from '../utils/axiosUtils'
export { USER_API_UNCOMPLETED } from './constants'

export function get(param) {
    return Get(`${urlPrefix}/h5/api/business/getUserBusinessList/${param}`);
}
export function revoke(id) {
    return Put(`${urlPrefix}/h5/api/businessNode/reset/${id}`);
}
