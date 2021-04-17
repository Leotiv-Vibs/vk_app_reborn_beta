import React, {Fragment} from 'react';


import {Panel, PanelHeader, PanelHeaderBack, Group, List, Cell, CardGrid, ContentCard} from '@vkontakte/vkui';
import basket from "../Pred/basketball.jpg";

const Rod_cours = ({id, go_rod}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_rod}/>}>
            Courses
        </PanelHeader>

        <Fragment>
            <h1>Курсы Вашего ребёнка</h1>
            <Group>
                <CardGrid size="l">

                    <ContentCard
                        image={basket}
                        subtitle="Спорт"
                        header="Баскетбол"
                        text="В детстве каждому из нас приходилось играть в баскетбол, будь это обычная игра с друзьями во дворе, либо школьный урок. В настоящее время именно детский баскетбол пользуется большой популярностью. Конечно, по сравнению с признанием баскетбола в США и Европе, мы уступаем, но все же мы движемся к популяризации этого вида спорта. На сегодняшний день, секции детского баскетбола есть во многих спортивных учреждениях нашей страны. Их активность и масштабность возрастает с каждым днем. К сожалению, секции для более взрослых игроков являются редкостью, поэтому BallGames рад приветствовать Вас на секционных занятиях по баскетболу!!! Стань частью нашей огромной семьи!!!"
                        maxHeight={450}
                    />

                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        maxHeight={250}
                    />

                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        maxHeight={250}
                    />
                    <ContentCard
                        image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                        subtitle="Категория курса"
                        header="Название курса"
                        text="Описание курса"
                        maxHeight={250}
                    />

                </CardGrid>
            </Group>
        </Fragment>

    </Panel>
);


export default Rod_cours;
