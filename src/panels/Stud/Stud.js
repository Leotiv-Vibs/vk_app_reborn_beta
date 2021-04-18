import React, {Fragment} from 'react';

import {
    Panel,
    PanelHeader,
    Search,
    PanelHeaderBack,
    Group,
    List,
    Cell,
    Epic,
    Tabbar,
    TabbarItem, Div, CardGrid, ContentCard, Separator
} from '@vkontakte/vkui';
import {Icon24Linked, Icon24ServicesOutline, Icon24StatisticsOutline} from "@vkontakte/icons";
import sh from "../Rod/sh.jpg";
import basket from "../Pred/basketball.jpg";
import prog from "../Rod/prog.jpg";

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


        {/*Сюда нужно как вместить поиск курса*/}
        {/*Через функция my_func я присваиваю переменной  search значение которое вводится*/}
        {/* И может как то можно использовать эту переменную в качестве параметра в LIKE  в запросе к бд*/}
        {/*В консоли можно посмотреть за изменением переменной*/}
        <Search onChange={e => my_func(e.target.value)} after={null}/>

        <Fragment>
            <Group>
                <Div>
                    Рекомендации
                </Div>
                <Div>
                    <CardGrid size="l">

                        <Div className='Phot'>
                            <ContentCard
                                image={sh}
                                subtitle="Интеллектуальные"
                                header="Шахматы"
                                text="Благодаря игре в шахматы у детей поддерживается устойчивый интерес к знаниям, существенно улучшается успеваемость детей по ряду предметов, воспитывается стремление к самосовершенствованию, прививаются дополнительные навыки общения (что важно для детей “некоммуникативного типа”). "
                                maxHeight={250}
                                caption='ул. Еременко д. 95'
                            />
                        </Div>
                        <Separator style={{margin: '22px 0'}}/>

                        <ContentCard
                            image={basket}
                            subtitle="Спорт"
                            header="Баскетбол"
                            text="В детстве каждому из нас приходилось играть в баскетбол, будь это обычная игра с друзьями во дворе, либо школьный урок. В настоящее время именно детский баскетбол пользуется большой популярностью. Конечно, по сравнению с признанием баскетбола в США и Европе, мы уступаем, но все же мы движемся к популяризации этого вида спорта."
                            maxHeight={250}
                            caption='ул. Нагибина д. 19'
                        />


                        <Separator style={{margin: '22px 0'}}/>

                        <ContentCard
                            image={prog}
                            subtitle="Программирование"
                            header="Курсы Python Start для детей"
                            text="Во время обучения дети пишут на python3 в стандартной IDLE до темы while включительно, потом устанавливают редактор кода. На Python можно писать сайты, программы, мобильные приложения, игры, встроенные системы для различных систем и дополнения к уже существующим программам.Чтобы перейти к созданию сложных и реальных проектов, ученики должны основательно пройти базу."
                            maxHeight={250}
                            caption='ул. Халтуринский д. 23'
                        />


                    </CardGrid>
                </Div>
            </Group>
            {/*<Group>*/}
            {/*    <List>*/}

            {/*        <Cell onClick={go_cours}>Мои курсы</Cell>*/}
            {/*        <Cell onClick={go_prog}>Мой прогресс</Cell>*/}
            {/*    </List>*/}
            {/*</Group>*/}


            <Group>

                <Epic tabbar={
                    <Tabbar>
                        <TabbarItem

                            onClick={go_cours}
                            text="Мои курсы"
                        ><Icon24ServicesOutline/></TabbarItem>

                        <TabbarItem

                            onClick={go_prog}
                            text="Мой прогресс"
                        ><Icon24StatisticsOutline/></TabbarItem>


                    </Tabbar>
                }/>
            </Group>
        </Fragment>


    </Panel>
);


export default Stud;
