import React, {Fragment} from 'react';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    ContentCard,
    Header,
    CardGrid,
    Card,
    Group,
    List,
    Cell,
    Div,
    Button
} from '@vkontakte/vkui';

import logo from './ICON.png'

import basket from './basketball.jpg'

const Cours_view = ({id, go_pred,}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_pred}/>}>
            Pred
        </PanelHeader>

        <Fragment>
            <h4>Тутачки твои курсы</h4>

            <Group>
                <CardGrid size="l">

                    <ContentCard
                        image={basket}
                        subtitle="Спорт"
                        header="Баскетбол"
                        text="В детстве каждому из нас приходилось играть в баскетбол, будь это обычная игра с друзьями во дворе, либо школьный урок. В настоящее время именно детский баскетбол пользуется большой популярностью. Конечно, по сравнению с признанием баскетбола в США и Европе, мы уступаем, но все же мы движемся к популяризации этого вида спорта. На сегодняшний день, секции детского баскетбола есть во многих спортивных учреждениях нашей страны. Их активность и масштабность возрастает с каждым днем. К сожалению, секции для более взрослых игроков являются редкостью, поэтому BallGames рад приветствовать Вас на секционных занятиях по баскетболу!!! Стань частью нашей огромной семьи!!!"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={450}
                    />

                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={250}
                    />

                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        caption="ДГТУ 2 этаж кабинет МЕСХИ(Адрес)"
                        maxHeight={250}
                    />

                </CardGrid>
            </Group>


        </Fragment>


    </Panel>
);


export default Cours_view;
