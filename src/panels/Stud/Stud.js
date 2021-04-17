import React, {Fragment} from 'react';

import {Panel,PanelHeader,PanelHeaderBack,Group,List,Cell} from '@vkontakte/vkui';

const Stud = ({
                  id,
                  go,
                  go_home,
                  go_prog,
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
                </List>
            </Group>
        </Fragment>


    </Panel>
);


export default Stud;
