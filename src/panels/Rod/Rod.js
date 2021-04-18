import React, {Fragment} from 'react';

import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell, Search} from '@vkontakte/vkui';

const Rod = ({id, go_home, go_rod_cours}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Личный кабинет родителя
        </PanelHeader>
        <Search  after={null}/>
        <Fragment>
            <Group>
                <List>
                    <Cell onClick={go_rod_cours} >Курсы ребенка</Cell>
                    <Cell >Прогресс ребенка</Cell>
                    <Cell >Указать ссылку на ребенка</Cell>
                </List>
            </Group>
        </Fragment>
    </Panel>
);


export default Rod;
