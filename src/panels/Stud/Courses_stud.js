import React, {Fragment} from 'react';


import {Panel,PanelHeader,PanelHeaderBack,Group,List,Cell} from '@vkontakte/vkui';

const Courses_stud = ({id, go_stud}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_stud}/>}>
            Courses
        </PanelHeader>
        <Fragment>
            <Group>
                <List>
                    <Cell >Шахматы</Cell>
                    <Cell >Баскетболл</Cell>
                    <Cell >Настольный теннис</Cell>
                    <Cell >Алгоритмика Python</Cell>
                    <Cell >Гитара</Cell>
                </List>
            </Group>
        </Fragment>

    </Panel>
);


export default Courses_stud;
