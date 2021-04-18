import React, {Fragment} from 'react';

import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell, Div, Button, Title} from '@vkontakte/vkui';
import mascot from "../../img/bear.png";
import '../css/logo.css'

const Create_courses_in = ({id, go_pred, go_create}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_pred}/>}>
            Pred
        </PanelHeader>


        < Fragment>

            <Div className='User'>
                <Title level="1" size='m' weight="bold"><h1>Coursel</h1></Title>


                <img className="Persik" src={mascot} alt="Mascot"/>

                < h1> Создай свой уникальный курс</h1>

                <h4>Здесь ты можешь создать свой курс и опубликовать его для всех</h4>
                <Div>
                    <Button size='l' style={{fontsize: '70px'}} onClick={go_create}>
                        Поехали создавать курс
                    </Button>
                </Div>
            </Div>
        </Fragment>


    </Panel>
);


export default Create_courses_in;
