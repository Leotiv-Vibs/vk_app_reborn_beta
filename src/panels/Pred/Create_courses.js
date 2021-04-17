import React, {Fragment} from 'react';

// import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell, Div, Button} from '@vkontakte/vkui';
import mascot from "../../img/bear.png";
import {FormItem, Div, Textarea, Input, PanelHeader, Panel, PanelHeaderBack} from "@vkontakte/vkui";


const Create_courses = ({id, go_pred,}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_pred}/>}>
            Pred
        </PanelHeader>

        < Fragment>
            <FormItem top="Фамилия">
                <Input />
            </FormItem>
            <FormItem top="Имя">
                <Input />
            </FormItem>
            <FormItem top="О себе">
                <Textarea/>
            </FormItem>
        </Fragment>


    </Panel>
);


export default Create_courses;
