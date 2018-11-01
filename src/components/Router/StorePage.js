import Item from "components/Item";
import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";

import Button from "components/Button";
import pages from "constants/pages";

import * as routerActions from "store/router/actions";
import * as inventoryActions from "store/inventory/actions";
import * as inventorySelectors from "store/inventory/reducer";

class StorePage extends Component {
    render() {
        const {
            pumpkin,
            sellPumpkins,
            money,
            exit,
            buySeed,
            buyBoost
        } = this.props;

        return (
            <div>
                <div className={"row"}>
                    Здесь можно купить семена тыквы — 1 семечко за монету.
                </div>
                <div className={"row"}>Время созревания 1 минута.</div>
                <div className={"row"}>
                    Можно продать тыквы по 5 монет за кажду
                </div>
                <div className={"row"}>Можно купить ускоритель за 5 монет</div>
                <div className={"buttons"}>
                    {pumpkin !== 0 && (
                        <Item onClick={sellPumpkins}>Продать тыквы</Item>
                    )}
                    {money > 1 && (
                        <Item onClick={buySeed} amount={1}>
                            Купить 1 семечко
                        </Item>
                    )}
                    {money > 3 && (
                        <Item onClick={buySeed} amount={3}>
                            Купить 3 семечка
                        </Item>
                    )}
                    {money > 5 && (
                        <Item onClick={buyBoost} amount={1}>
                            Купить ускоритель
                        </Item>
                    )}
                    <Button onClick={exit}>Выйти из магазина</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    money: inventorySelectors.getMoney(state),
    pumpkin: inventorySelectors.getPumpkin(state)
});

const mapDispatchToProps = dispatch => ({
    exit: () => dispatch(routerActions.switchPage(pages.MAIN)),

    sellPumpkins: () => dispatch(inventoryActions.sellPumpkins()),
    buySeed: amount => dispatch(inventoryActions.buySeed(amount)),
    buyBoost: amount => dispatch(inventoryActions.buyBoost(amount))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StorePage);
