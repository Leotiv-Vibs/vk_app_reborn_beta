import React, {Fragment} from 'react';

import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell, Search} from '@vkontakte/vkui';

const Rod = ({id, go_home, my_func,go_rod_cours}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Rod
        </PanelHeader>
        <h1>Ты родитель и тут будет твой функционал</h1>
        {/*Сюда нужно как вместить поиск курса*/}
        {/*Через функция my_func я присваиваю переменной  search значение которое вводится*/}
        {/* И может как то можно использовать эту переменную в качестве параметра в LIKE  в запросе к бд*/}
        {/*В консоли можно посмотреть за изменением переменной*/}
        <Search onChange={e => my_func(e.target.value)} after={null}/>
        <Fragment>
            <Group>
                <List>
                    <Cell onClick={go_rod_cours} >Курсы ребенка</Cell>
                    <Cell >Прогресс ребенка</Cell>
                    <Cell >Указать ссылку на ребенка</Cell>
                </List>
            </Group>
        </Fragment>
    </Panel>
);


export default Rod;
