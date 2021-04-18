import React, {Fragment} from 'react';

import {Panel, Div, Progress, PanelHeader, PanelHeaderBack, Group, List, Cell} from '@vkontakte/vkui';
import sh from "../../img/sh.jpg";
import basket from "../../img/basketball.jpg";
import prog from "../../img/prog.jpg";

import './stud.css'

const Progress_ = ({id, go_stud}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_stud}/>}>
            Progress
        </PanelHeader>

        <Div className='User'>
            <Group>
                <h4>Шахматы</h4>
                <Div>
                    <img
                        src={sh}/>
                    <Progress value={55}/>
                </Div>
            </Group>

            <Group>
                <h4>Баскетбол</h4>
                <Div>
                    <img
                        src={basket}/>
                    <Progress value={70}/>
                </Div>
            </Group>

            <Group>
                <h4>Программирование на Python</h4>
                <Div>
                    <img
                        src={prog}/>
                    <Progress value={100}/>
                </Div>
            </Group>

        </Div>

    </Panel>
);


export default Progress_;
