const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'
const SET_LOADING = 'SET_LOADING'
const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT'
const SET_IS_POPUP = 'SET_IS_POPUP'


const initialState = {
    productList: null as null | any,
    loading: true,
    selectedProduct: null as null | any,
    isPopup: false
}

export type InitialStateType = typeof initialState


export const productListReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {...state, productList: action.payload}
        case SET_LOADING:
            return {...state, loading: action.payload}
        case SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        case SET_IS_POPUP:
            return {...state, isPopup: action.payload}
        default:
            return state
    }
}


type SetProductListActionType = { type: typeof SET_PRODUCT_LIST, payload: boolean }
const setProductList = (payload: any): SetProductListActionType => ({type: SET_PRODUCT_LIST, payload})

type SetLoadingActionType = { type: typeof SET_LOADING, payload: boolean }
const setLoading = (payload: boolean): SetLoadingActionType => ({type: SET_LOADING, payload})

type SetSelectedProductActionType = { type: typeof SET_SELECTED_PRODUCT, payload: boolean }
export const setSelectedProduct = (payload: any): SetSelectedProductActionType => ({
    type: SET_SELECTED_PRODUCT,
    payload
})


type SetIsPopupActionType = { type: typeof SET_IS_POPUP, payload: boolean }
export const setIsPopup = (payload: boolean): SetIsPopupActionType => ({type: SET_IS_POPUP, payload})


export const setProductListThunk = () => (dispatch: any) => {
    dispatch(setLoading(true))
    fetch('http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books').then(response => response.json()).then(productList => {
        productList.books.map((prodictItem: any) => prodictItem['isAdd'] = 'false')

        dispatch(setProductList(productList.books))

        dispatch(setLoading(false))

    })
}
