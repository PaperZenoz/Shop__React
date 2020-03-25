import React, {useState} from 'react'

type Props = {
    setSelectedProduct: any
    setIsPopup: any
    selectedProduct: any
    setNoProduct: (payload: boolean) => void
    setBasketList: any
    setIsAdd: any
    basketList: any

}


let ProductCard: React.FC<Props> = ({selectedProduct, setSelectedProduct, setIsPopup, setNoProduct, setBasketList, setIsAdd, basketList}) => {
    const [inputValue, setInputValue] = useState(0)


    const onClickHandler = (selectedProduct: any) => {
        setSelectedProduct(selectedProduct)
        setIsPopup(true)
    }


    const onChangeHandler = (e: any) => {
        if (e >= 0 && e <= 3) {
            setInputValue(e)
        } else if (e > 3) {
            setNoProduct(true)
        }
    }

    const onSubmitHandler = (e: any) => {
        e.preventDefault()

        setIsAdd(true)

        const check = basketList.map((basketItem: any) =>  basketItem.title)
        let filtered = check.filter( (currentValue: any) => currentValue ===  selectedProduct.title);

        if(inputValue > 0 && filtered.length < 1){
            setBasketList({
                title: selectedProduct.title,
                count: inputValue,
                id: Date.now(),
                price: selectedProduct.price
            })

            alert('Товар добавлен')
        }



    }


    return (

        <div className="product-card mb-5">


            <div className="card" onClick={() => onClickHandler(selectedProduct)}>
                <div>
                    <div className="product-card__img">
                        <img src={selectedProduct.image} className="card-img-top" alt="Товар"/>
                    </div>
                    <div className="card-body product-card__body text-center">
                        <p className="card-text "><strong>{selectedProduct.title}</strong></p>
                        <div>
                            <p className="card-text"><strong>Цена:</strong> {selectedProduct.price} $</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 text-center"><strong>Выберите количество товара:</strong></div>
            <div className="mb-3 justify-content-around mt-3 d-flex align-items-center">

                <form className="w-100" onSubmit={e => onSubmitHandler(e)}>
                    <input className="form-control text-center" value={inputValue} type="number"
                           onChange={e => onChangeHandler(e.target.value)}/>
                    <button
                        className="btn btn-secondary btn-lg btn-block mt-3">{selectedProduct.isAdd && 'Добавить в корзину'}
                    </button>
                </form>


            </div>


        </div>
    )
}

export default ProductCard