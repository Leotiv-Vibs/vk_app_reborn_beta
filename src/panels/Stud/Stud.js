import React, {Fragment} from 'react';

import {Panel, PanelHeader, Search, PanelHeaderBack, Group, List, Cell} from '@vkontakte/vkui';

const Stud = ({
                  id,
                  go,
                  go_home,
                  go_prog,
                  go_cours,
                  my_func,
              }) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Stud
        </PanelHeader>

        <h1>Ты ученик и тут будет твой функционал</h1>
        {/*Сюда нужно как вместить поиск курса*/}
        {/*Через функция my_func я присваиваю переменной  search значение которое вводится*/}
        {/* И может как то можно использовать эту переменную в качестве параметра в LIKE  в запросе к бд*/}
        {/*В консоли можно посмотреть за изменением переменной*/}
        <Search onChange={e => my_func(e.target.value)} after={null}/>

        <Fragment>

            <Group>
                <List>

                    <Cell onClick={go_cours}>Мои курсы</Cell>
                    <Cell onClick={go_prog}>Мой прогресс</Cell>
                </List>
            </Group>
        </Fragment>


    </Panel>
);


export default Stud;
