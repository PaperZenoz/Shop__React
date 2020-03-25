import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {setBasketNoProduct, updateBasketList} from "../../../redux/basketReducer";
import BasketItem from "./BasketItem/BasketItem";

type Props = {
    basketList: any
    updateBasketList: any
    basketNoProduct: any
    setBasketNoProduct: any
}


let BasketList: React.FC<Props> = ({basketList, updateBasketList, basketNoProduct, setBasketNoProduct}) => {

    const onClickHandler = () => {
        setBasketNoProduct(false)
    }


    return (
        <div>
            {basketList.length > 0 ? (basketList.map((basketItem: any, index: number) => {
                return (
                    <BasketItem basketItem={basketItem} key={index} updateBasketList={updateBasketList}
                                basketList={basketList} setBasketNoProduct={setBasketNoProduct}/>
                )

            })) : ( <h3 className="text-center">Корзина пуста</h3>)}

            {basketNoProduct && <div className="popup__wrap">
                <div className="container popup">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title mb-5 text-center">На складе отсутствует необходимое количество товаров</h5>
                            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={onClickHandler}>Закрыть
                            </button>
                        </div>
                    </div>
                </div>

            </div>}


        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        basketList: state.basket.basketList,
        basketNoProduct: state.basket.basketNoProduct
    }
}


export default connect(mapStateToProps, {updateBasketList, setBasketNoProduct})(BasketList)