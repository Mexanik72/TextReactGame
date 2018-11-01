import React from "react";

import Button from "components/Button";

const StartPage = ({ startGame }) => (
    <div>
        <div className={"startGame"}>
            Игра подобна счастливой ферме, где сажаешь тыкву, через час
            заходишь, она созрела
        </div>
        <div className={"buttons"}>
            <Button onClick={startGame}>Начать игру</Button>
        </div>
    </div>
);

export default StartPage;
