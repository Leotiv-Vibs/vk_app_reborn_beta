import React, {Fragment} from 'react';

import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell, Div, Button} from '@vkontakte/vkui';
import mascot from "../../img/bear.png";

const Create_courses_in = ({id, go_pred, go_create}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_pred}/>}>
            Pred
        </PanelHeader>


        < Fragment>
            <Div className='User'>

                <img className="Mascot" src={mascot} alt="Mascot"/>

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
