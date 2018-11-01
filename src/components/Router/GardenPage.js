import React from "react";
import connect from "react-redux/es/connect/connect";

import Button from "components/Button";
import GardenItem from "components/GardenItem";

import pages from "constants/pages";

import * as inventorySelectors from "store/inventory/reducer";
import * as routerActions from "store/router/actions";

import * as gardenSelectors from "store/garden/reducer";
import * as gardenActions from "store/garden/actions";

const GardenPage = ({ exit, seed, plantSeed, gardenPumpkins }) => (
    <div>
        <div className={"row"}> Ты в огороде.</div>
        {gardenPumpkins.map(id => (
            <GardenItem key={id} id={id} />
        ))}
        <div className={"buttons"}>
            {seed > 0 && <Button onClick={plantSeed}>Посадить семечко</Button>}
            <Button onClick={exit}>Выйти из огорода</Button>
        </div>
    </div>
);

const mapStateToProps = state => ({
    seed: inventorySelectors.getSeed(state),
    gardenPumpkins: gardenSelectors.getPumpkinsList(state)
});

const mapDispatchToProps = dispatch => ({
    exit: () => dispatch(routerActions.switchPage(pages.MAIN)),

    plantSeed: () => dispatch(gardenActions.plantSeed())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GardenPage);
