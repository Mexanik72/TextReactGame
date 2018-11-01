import React from "react";
import { connect } from "react-redux";

import Button from "components/Button";

import * as inventorySelectors from "store/inventory/reducer";

import * as gardenSelectors from "store/garden/reducer";
import * as gardenActions from "store/garden/actions";

const GardenItem = ({ pumpkin, collectPumpkin, useBoost, booster }) =>
    !pumpkin ? null : (
        <div className={"row"}>
            {pumpkin.time > 0 ? (
                <div>
                    Здесь растет тыква. До созревания {pumpkin.time} сек.
                    {booster > 0 && (
                        <Button onClick={useBoost}>Ускорить</Button>
                    )}
                </div>
            ) : (
                <div>
                    Тыква уже созрела{" "}
                    <Button onClick={collectPumpkin}>Собрать</Button>
                </div>
            )}
        </div>
    );

const mapStateToProps = (state, ownProp) => ({
    pumpkin: gardenSelectors.getPumpkin(state, ownProp.id),
    booster: inventorySelectors.getBooster(state)
});

const mapDispatchToProps = (dispatch, ownProp) => ({
    collectPumpkin: () => dispatch(gardenActions.collectPumpkin(ownProp.id)),
    useBoost: () => dispatch(gardenActions.useBoost(ownProp.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GardenItem);
