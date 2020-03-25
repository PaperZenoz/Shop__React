import React, {useState} from 'react'


type Props = {
    basketItem: any
    basketList: any
    updateBasketList: any
    setBasketNoProduct: any
}


const BasketItem: React.FC<Props> = ({basketItem, basketList, updateBasketList, setBasketNoProduct}) => {
    const [value, setValue] = useState(basketItem.count)


    const removeBasketItem = (id: number) => {
        updateBasketList(basketList.filter((basketItem: any) => basketItem.id !== id))
    }

    const onChangeHandler = (e: any) => {
        if (e >= 0 && e <= 3) {
            setValue(e)
        } else if (e > 3){
            setBasketNoProduct(true)
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title mb-3">{basketItem.title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <input type="number" className="form-control w-50" value={value}
                           onChange={e => onChangeHandler(e.target.value)}/>
                    <p>{basketItem.price * value}$</p>
                    <button className="btn btn-danger" onClick={() => removeBasketItem(basketItem.id)}>Удалить продукт
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BasketItem