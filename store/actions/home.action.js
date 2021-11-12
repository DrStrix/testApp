export const HOME_DATA_FETCH = 'HOME_DATA_FETCH'
export const HOME_DATA_SET = 'HOME_DATA_SET'

export const HOME_DATA_APPEND_FETCH = 'HOME_DATA_APPEND_FETCH'
export const HOME_DATA_APPEND_SET = 'HOME_DATA_APPEND_SET'

export const getHomeData = () => {
    return {
        type: HOME_DATA_FETCH,
    }
}

export const setHomeData = (data) => {
    return {
        type: HOME_DATA_SET,
        payload: data,
    }
}

export const appendFetchHomeData = () => {
    return {
        type: HOME_DATA_APPEND_FETCH,
    }
}

export const appendSetHomeData = (data) => {
    return {
        type: HOME_DATA_APPEND_SET,
        payload: data,
    }
}