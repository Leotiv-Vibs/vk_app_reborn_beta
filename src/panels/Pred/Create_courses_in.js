import React from 'react';

import {Panel, PanelHeader, PanelHeaderBack, Div, Button, Title} from '@vkontakte/vkui';
import mascot from "../../img/bear.png";
import '../css/logo.css'

const Create_courses_in = ({id, go_pred, go_create}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_pred}/>}>
        Создай свой уникальный курс
        </PanelHeader>
            <Div className='User'>
                <Title level="1" size='m' weight="bold"><h1>Coursel</h1></Title>
                <img className="Persik" src={mascot} alt="Mascot"/>
                <h4>Здесь ты можешь создать свой курс и опубликовать его для всех</h4>
                <Div>
                    <Button size='l' onClick={go_create}>
                        Поехали создавать курс
                    </Button>
                </Div>
            </Div>
    </Panel>
);


export default Create_courses_in;
