import React, {Fragment} from 'react';
import '../css/rod.css';

import {Icon24ServicesOutline, Icon24StatisticsOutline,Icon24Linked} from '@vkontakte/icons';
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Div,
    Separator,
    Search,
    Button,
    ModalCard,
    Epic,
    Tabbar,
    TabbarItem, ContentCard, CardGrid
} from '@vkontakte/vkui';
import basket from "../../img/basketball.jpg";
import sh from '../../img/sh.jpg'
import prog from '../../img/prog.jpg'


const Rod = ({id, go_home, my_func, go_rod_cours, setCard, modal_card, ssilka, s}) => (
    <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Личный кабинет родителя
        </PanelHeader>
        <Search onChange={e => my_func(e.target.value)} after={null}/>
        {modal_card == false &&
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
                                caption='ул. Еременко д. 95'/>
                        </Div>
                        <Separator style={{margin: '22px 0'}}/>
                        <ContentCard
                            image={basket}
                            subtitle="Спорт"
                            header="Баскетбол"
                            text="В детстве каждому из нас приходилось играть в баскетбол, будь это обычная игра с друзьями во дворе, либо школьный урок. В настоящее время именно детский баскетбол пользуется большой популярностью. Конечно, по сравнению с признанием баскетбола в США и Европе, мы уступаем, но все же мы движемся к популяризации этого вида спорта."
                            maxHeight={250}
                            caption='ул. Нагибина д. 19'/>
                        <Separator style={{margin: '22px 0'}}/>
                        <ContentCard
                            image={prog}
                            subtitle="Программирование"
                            header="Курсы Python Start для детей"
                            text="Во время обучения дети пишут на python3 в стандартной IDLE до темы while включительно, потом устанавливают редактор кода. На Python можно писать сайты, программы, мобильные приложения, игры, встроенные системы для различных систем и дополнения к уже существующим программам.Чтобы перейти к созданию сложных и реальных проектов, ученики должны основательно пройти базу."
                            maxHeight={250}
                            caption='ул. Халтуринский д. 23'/>
                    </CardGrid>
                </Div>
            </Group>
            <Group>
                <Epic tabbar={
                    <Tabbar>
                        <TabbarItem onClick={go_rod_cours}
                            text="Курсы ребенка">
                            <Icon24ServicesOutline/>
                        </TabbarItem>
                        <TabbarItem text="Прогресс ребенка">   
                            <Icon24StatisticsOutline/>
                        </TabbarItem>
                        <TabbarItem
                            onClick={() => setCard(true)}
                            text="Vk ссылка ребенка">
                            <Icon24Linked/>
                        </TabbarItem>
                    </Tabbar>
                }/>
            </Group>

        </Fragment>}

        {modal_card == true &&
        <ModalCard
            onClose={() => setCard(false)}
            header="Введите ссылку вашего ребенка в vk.com"
            actions={
                <Button size="l" mode="primary" onClick={() => setCard(false)}>Сохранить</Button>
            }>
            <input onChange={event => s(event.target.value)}/>
        </ModalCard>}
    </Panel>

);


export default Rod;
