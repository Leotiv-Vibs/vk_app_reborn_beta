import React, {Fragment} from 'react';


import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Group from "@vkontakte/vkui/dist/components/Group/Group";


const Stud = ({
                  id,
                  go,
                  go_home,
                  go_prog,
                  go_meshi,
                  go_cours,
              }) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Stud
        </PanelHeader>

        <h1>Ты ученик и тут будет твой функционал</h1>
        <Fragment>
            <Group>
                <List>
                    <Cell onClick={go_cours}>Мои курсы</Cell>
                    <Cell onClick={go_prog}>Мой прогресс</Cell>
                    <Cell onClick={go_meshi}>Предложение от месхи</Cell>
                </List>
            </Group>
        </Fragment>


    </Panel>
);


export default Stud;
