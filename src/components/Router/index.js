import Inventory from "components/Inventory";
import GardenPage from "components/Router/GardenPage";
import StorePage from "components/Router/StorePage";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as routerActions from "store/router/actions";

import StartPage from "./StartPage";
import MainPage from "./MainPage";
import pages from "constants/pages";

import * as routerSelectors from "store/router/reducer";

class Router extends Component {
    getPage = () => {
        const { currentPage, startGame, toStore, toGarden } = this.props;

        switch (currentPage) {
            case pages.START_GAME:
                return <StartPage startGame={startGame} />;

            case pages.STORE:
                return <StorePage />;
            case pages.GARDEN:
                return <GardenPage />;
            default:
                return <MainPage toStore={toStore} toGarden={toGarden} />;
        }
    };

    render() {
        const { currentPage } = this.props;

        return (
            <div className={"container"}>
                <div className={"content"}>
                    {this.getPage()}
                    {currentPage !== pages.START_GAME && <Inventory />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentPage: routerSelectors.getCurrentPage(state)
});

const mapDispatchToProps = dispatch => ({
    startGame: () => dispatch(routerActions.switchPage(pages.MAIN)),
    toStore: () => dispatch(routerActions.switchPage(pages.STORE)),
    toGarden: () => dispatch(routerActions.switchPage(pages.GARDEN))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router);
