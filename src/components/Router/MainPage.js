import React from "react";

import Button from "components/Button";

const MainPage = ({ toStore, toGarden }) => (
    <div>
        <div>
            <div className={"row"}> Семена можно покупать в магазине</div>
            <div className={"row"}> В огороде можно выращивать культуры</div>
            <div className={"row"}>
                Если ты покинешь страницу или выключишь компьютер, культуры все
                равно будут расти. Ты можешь вернуться позже и загрузить
                последнее автосохранение, после чего можешь собрать готовый
                урожай.
            </div>
        </div>
        <div className={"buttons"}>
            Куда отправится?
            <Button onClick={toStore}>В магазин</Button>
            <Button onClick={toGarden}>В огород</Button>
        </div>
    </div>
);

export default MainPage;
