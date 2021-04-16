import React, {Fragment} from 'react';


import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";



const Pred = ({id, go_home}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Pred
        </PanelHeader>
        <h1>Ты препод и тут будет твой функционал</h1>
        <Fragment>
            <Group>
                <List>
                    <Cell >Мои курсы</Cell>
                    <Cell >Создать курс</Cell>
                    <Cell >Искать курсы</Cell>
                </List>
            </Group>
        </Fragment>

    </Panel>
);


export default Pred;
