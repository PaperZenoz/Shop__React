import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import {Route, Switch} from "react-router";
import {setProductListThunk} from "./redux/productListReducer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/store";
import {setWidgetSumm} from "./redux/basketReducer";


type Props = {
    setProductListThunk: any
    basketList: any
    setWidgetSumm: any
    widgetSumm: number
}


const App: React.FC<Props> = ({setProductListThunk, basketList, setWidgetSumm, widgetSumm}) => {
    useEffect(() => {
        setProductListThunk()
    }, [])


    const widget = basketList.map((basketItem: any) => Number(basketItem.count))




    if (widget.length > 0){
        setWidgetSumm(widget.reduce((first: any, last: any) => first + last))
    } else {
        setWidgetSumm(0)
    }

    return (
        <>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/main">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/basket">Корзина ( {widgetSumm} )</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        <div className="container pt-4">
            <Switch>
                <Route render={() => <Main/>} path='/main'/>
                <Route render={() => <Basket/>} path='/basket'/>
            </Switch>
        </div>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        basketList: state.basket.basketList,
        widgetSumm: state.basket.widgetSumm
    }
}

export default connect(mapStateToProps, {setProductListThunk, setWidgetSumm})(App);
