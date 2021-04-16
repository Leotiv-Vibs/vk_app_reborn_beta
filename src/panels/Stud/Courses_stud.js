import React, {Fragment} from 'react';


import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";



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
