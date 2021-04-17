import React, {Fragment} from 'react';

import {Panel, Div, Progress, PanelHeader, PanelHeaderBack, Group, List, Cell} from '@vkontakte/vkui';

const Progress_ = ({id, go_stud}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_stud}/>}>
            Progress
        </PanelHeader>
        

        <Group>
            <h4>Настольный теннис</h4>
            <Div>
                <Progress value={20}/>
            </Div>
        </Group>

        <Group>
            <h4>Баскетбол</h4>
            <Div>
                <Progress value={40}/>
            </Div>
        </Group>

        <Group>
            <h4>Шахматы</h4>
            <Div>
                <Progress value={60}/>
            </Div>
        </Group>

        <Group>
            <h4>Умение воровать</h4>
            <Div>
                <Progress value={100}/>
            </Div>
        </Group>

    </Panel>
);


export default Progress_;
