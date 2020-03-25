const SET_BASKET_LIST = 'SET_BASKET_LIST'
const SET_NO_PRODUCT = 'SET_NO_PRODUCT'
const UPDATE_BASKET_LIST = 'UPDATE_BASKET_LIST'
const SET_IS_ADD = 'SET_IS_ADD'
const SET_BASKET_NO_PRODUCT = 'SET_BASKET_NO_PRODUCT'
const SET_WIDGET_SUM = 'SET_WIDGET_SUM'





const initialState = {
    basketList: [] as any,
    noProduct: false,
    isAdd: null as null | boolean,
    basketNoProduct: false,
    widgetSumm: 0
}

export type InitialStateType = typeof initialState


export const basketReducer = (state = initialState, action : any): InitialStateType => {
    switch (action.type) {
        case SET_BASKET_LIST:
            return {...state, basketList: [...state.basketList, action.payload]}
        case SET_NO_PRODUCT:
            return {...state, noProduct: action.payload}
        case UPDATE_BASKET_LIST:
            return {...state, basketList: action.payload}
        case SET_IS_ADD:
            return {...state, isAdd: action.payload}
        case SET_BASKET_NO_PRODUCT:
            return {...state, basketNoProduct: action.payload}
        case SET_WIDGET_SUM:
            return {...state, widgetSumm: action.payload}

        default:
            return state

    }
}

type SetBasketListActionType = { type : typeof SET_BASKET_LIST, payload : any }
export const setBasketList = (payload: any): SetBasketListActionType =>  ({type: SET_BASKET_LIST, payload})

type SetNoProductActionType = { type : typeof SET_NO_PRODUCT, payload : boolean }
export const setNoProduct = (payload: boolean): SetNoProductActionType =>  ({type: SET_NO_PRODUCT, payload})

type UpdateBasketListActionType = { type : typeof UPDATE_BASKET_LIST, payload : any }
export const updateBasketList = (payload: any): UpdateBasketListActionType =>  ({type: UPDATE_BASKET_LIST, payload})

type SetIsAddActionType = { type : typeof SET_IS_ADD, payload : boolean }
export const setIsAdd = (payload: boolean): SetIsAddActionType =>  ({type: SET_IS_ADD, payload})


type SetBasketNoProduct = { type : typeof SET_BASKET_NO_PRODUCT, payload : boolean }
export const setBasketNoProduct = (payload: boolean): SetBasketNoProduct =>  ({type: SET_BASKET_NO_PRODUCT, payload})

type SetWidgetSumActionType = { type : typeof SET_WIDGET_SUM, payload : number }
export const setWidgetSumm = (payload: number): SetWidgetSumActionType =>  ({type: SET_WIDGET_SUM, payload})