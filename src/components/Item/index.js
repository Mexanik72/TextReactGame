import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "components/Button";

class Item extends Component {
    handleClick = () => {
        const { amount, onClick } = this.props;

        onClick(amount);
    };

    render() {
        const { children } = this.props;

        return <Button onClick={this.handleClick}>{children}</Button>;
    }
}

Item.propTypes = {
    amount: PropTypes.number,
    onClick: PropTypes.func.isRequired
};

export default Item;
