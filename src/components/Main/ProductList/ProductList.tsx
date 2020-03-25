import React, {useEffect} from 'react'
import {setIsPopup, setProductListThunk, setSelectedProduct} from "../../../redux/productListReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import Preloader from "../../../common/Preloader";
import ProductCard from "./ProductCard/ProductCard";
import {setBasketList, setIsAdd, setNoProduct} from "../../../redux/basketReducer";


type Props = {
    setProductListThunk: any
    productList: any
    loading: boolean
    setSelectedProduct: any
    setIsPopup: (payload: boolean) => void
    isPopup: boolean
    selectedProduct: any
    noProduct: boolean
    setNoProduct: (payload: boolean) => void
    setBasketList: any
    setIsAdd: any
    basketList: any
}


let ProductList: React.FC<Props> = ({productList, loading, setSelectedProduct, setIsPopup, isPopup, selectedProduct, noProduct, setNoProduct, setBasketList, setIsAdd,  basketList}) => {




    const onClickPopupHandler = () => {
        setIsPopup(false)
    }

    const onClickPopoupNoProductHandler = () => {
        setNoProduct(false)
    }


    return (
        <div className="d-flex flex-wrap justify-content-between mt-4">
            {noProduct &&
            <div className="popup__wrap">
                <div className="container popup">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title mb-5 text-center">На складе отсутствует необходимое количество товаров</h5>
                            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={onClickPopoupNoProductHandler}>Закрыть
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            }


            {isPopup && <div className="popup__wrap">
                <div className="container popup">
                    <div className="card mb-3">
                        <div className="popup__img">
                            <img src={selectedProduct.image} className="card-img-top" alt="Изображение товара"/>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{selectedProduct.title}</h5>
                            <p className="card-text">{selectedProduct.subtitle}</p>
                            <p className="card-text"><strong>Цена: </strong>{selectedProduct.price} $</p>
                            <p className="card-text">
                                <small className="text-muted">Международный стандартный номер
                                    книги: {selectedProduct.isbn13}</small>
                            </p>
                            <button type="button" className="btn btn-secondary btn-lg btn-block"
                                    onClick={onClickPopupHandler}>Закрыть
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            }


            {loading ? (<Preloader/>) : (productList.map((selectedProduct: any, index: number) => {
                return (
                    <ProductCard setNoProduct={setNoProduct} setSelectedProduct={setSelectedProduct} setIsPopup={setIsPopup} setBasketList={setBasketList} selectedProduct={selectedProduct} key={index} setIsAdd={setIsAdd} basketList={basketList}/>
                )
            }))}


        </div>


    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        productList: state.productList.productList,
        loading: state.productList.loading,
        isPopup: state.productList.isPopup,
        selectedProduct: state.productList.selectedProduct,
        noProduct: state.basket.noProduct,
        basketList: state.basket.basketList

    }
}

export default connect(mapStateToProps, {setProductListThunk, setSelectedProduct, setIsPopup, setNoProduct, setBasketList, setIsAdd})(ProductList)