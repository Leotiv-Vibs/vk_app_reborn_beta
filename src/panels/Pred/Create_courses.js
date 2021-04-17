import React, {Fragment} from 'react';


import {FormItem, Div, Textarea, Select, Input, PanelHeader, Panel, PanelHeaderBack, Button} from "@vkontakte/vkui";


const Create_courses = ({id, go_pred,}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_pred}/>}>
            Pred
        </PanelHeader>

        < Fragment>

            <FormItem top="Название кружка">
                <Input placeholder="Введите название кружка"/>
            </FormItem>
            <FormItem top="Категория">
                <Select
                    placeholder="Выберите категорию кружка"
                    options={[
                        {value: '1', label: 'Спорт'},
                        {value: '2', label: 'Музыка'},
                        {value: '3', label: 'Танец'},
                        {value: '4', label: 'Изобразительное искусство'},
                        {value: '5', label: 'Сценическое искусство'},
                        {value: '6', label: 'Кулинария'},
                        {value: '7', label: 'Программирование'},
                        {value: '8', label: 'Технические науки'},
                    ]}
                />
            </FormItem>
            <FormItem top="Адрес">
                <Input placeholder="Введите адрес"/>
            </FormItem>
            <FormItem top="О кружке">
                <Textarea placeholder="Введите описание кружка"/>
            </FormItem>
            <Button size='l'>
                Отправить данные
            </Button>
        </Fragment>


    </Panel>
);


export default Create_courses;
