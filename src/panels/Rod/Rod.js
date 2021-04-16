import React, {Fragment} from 'react';


import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";



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
