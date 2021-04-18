import React, {Fragment} from 'react';
import './rod.css'

import {Icon24ServicesOutline} from '@vkontakte/icons';
import {Icon24StatisticsOutline} from '@vkontakte/icons';
import {Icon24Linked} from '@vkontakte/icons';
import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Div,
    List,
    Separator,
    Cell,
    Search,
    ModalPage,
    Button,
    ModalCard,
    Epic,
    Textarea,
    Counter,
    Tabbar,
    InfoRow,
    ModalPageHeader,
    TabbarItem, ContentCard, CardGrid
} from '@vkontakte/vkui';
import basket from "../Pred/basketball.jpg";
import sh from './sh.jpg'
import prog from './prog.jpg'


const Rod = ({id, go_home, my_func, go_rod_cours, setCard, modal_card, ssilka, s}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Личный кабинет родителя
        </PanelHeader>
        {/*Сюда нужно как вместить поиск курса*/}
        {/*Через функция my_func я присваиваю переменной  search значение которое вводится*/}
        {/* И может как то можно использовать эту переменную в качестве параметра в LIKE  в запросе к бд*/}
        {/*В консоли можно посмотреть за изменением переменной*/}
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


            <Group>

                {/*<List>*/}
                {/*    <Cell onClick={go_rod_cours}>Курсы ребенка</Cell>*/}
                {/*    <Cell>Прогресс ребенка</Cell>*/}
                {/*    <Cell>Указать ссылку на ребенка</Cell>*/}
                {/*</List>*/}


                <Epic tabbar={
                    <Tabbar>
                        <TabbarItem

                            onClick={go_rod_cours}
                            // data-story="feed"
                            text="Курсы ребенка"
                        ><Icon24ServicesOutline/></TabbarItem>

                        <TabbarItem

                            // onClick={a}
                            text="Прогресс ребенка"
                        ><Icon24StatisticsOutline/></TabbarItem>
                        {console.log(ssilka)}

                        <TabbarItem

                            onClick={() => setCard(true)}
                            // data-story="more"
                            text="Vk ссылка ребенка"
                        ><Icon24Linked/></TabbarItem>
                    </Tabbar>
                }/>
            </Group>

        </Fragment>}

        {modal_card == true &&
        <ModalCard

            onClose={() => setCard(false)}
            header="Введите ссылку вашего ребенка в vk.com"
            actions={
                <Button size="l" mode="primary" onClick={() => setCard(false)}>
                    Сохранить
                </Button>
            }
        >
            <input onChange={event => s(event.target.value)}/>
        </ModalCard>}
    </Panel>

);


export default Rod;
