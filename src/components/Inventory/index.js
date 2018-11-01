import React from "react";
import { connect } from "react-redux";

import * as inventorySelectors from "store/inventory/reducer";

import { ReactComponent as DollarIcon } from "./dollar.svg";
import { ReactComponent as PumpkinIcon } from "./pumpkin.svg";
import { ReactComponent as BoosterIcon } from "./booster.svg";
import { ReactComponent as SeedIcon } from "./seed.svg";

const Inventory = ({ money, pumpkin, booster, seed }) => (
    <div className={"inventory"}>
        <div>
            <DollarIcon className={"icon"} />
            {money}
        </div>

        <div>
            <PumpkinIcon className={"icon"} />
            {pumpkin}
        </div>

        <div>
            <SeedIcon className={"icon"} />
            {seed}
        </div>

        <div>
            <BoosterIcon className={"icon"} />
            {booster}
        </div>
    </div>
);

const mapStateToProps = state => ({
    money: inventorySelectors.getMoney(state),
    pumpkin: inventorySelectors.getPumpkin(state),
    booster: inventorySelectors.getBooster(state),
    seed: inventorySelectors.getSeed(state)
});

export default connect(mapStateToProps)(Inventory);
