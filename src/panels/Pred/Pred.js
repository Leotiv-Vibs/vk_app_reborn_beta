import React, {Fragment} from 'react';

import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell} from '@vkontakte/vkui';

const Pred = ({id, go_home, go_create_cour_in, go_my_cours}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Pred
        </PanelHeader>
        <h1>Ты препод и тут будет твой функционал</h1>
        <Fragment>
            <Group>
                <List>
                    <Cell onClick={go_my_cours}>Мои курсы</Cell>
                    <Cell onClick={go_create_cour_in}>Создать курс</Cell>
                </List>
            </Group>
        </Fragment>

    </Panel>
);


export default Pred;
