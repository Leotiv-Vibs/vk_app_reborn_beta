import React, {Fragment} from 'react';

import {Panel,PanelHeader,PanelHeaderBack,Group,List,Cell} from '@vkontakte/vkui';

const Rod = ({id, go_home}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Rod
        </PanelHeader>
        <h1>Ты родитель и тут будет твой функционал</h1>
        <Fragment>
            <Group>
                <List>
                    <Cell >Курсы ребенка</Cell>
                    <Cell >Прогресс ребенка</Cell>
                    <Cell >Искать курсы</Cell>
                </List>
            </Group>
        </Fragment>
    </Panel>
);


export default Rod;
