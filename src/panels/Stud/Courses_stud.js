import React, {Fragment} from 'react';


import  {Panel, Div, PanelHeader, PanelHeaderBack, Group, List, Cell, CardGrid, ContentCard} from '@vkontakte/vkui';
import basket from "../Pred/basketball.jpg";

import './stud.css'

const Courses_stud = ({id, go_stud}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_stud}/>}>
            Courses
        </PanelHeader>

        <Fragment>
            <Group>
                <Div className='User'>
                    <h1>Мои курсы</h1>

                    <CardGrid size="l">

                        <ContentCard
                            image={basket}
                            subtitle="Спорт"
                            header="Баскетбол"
                            text="В детстве каждому из нас приходилось играть в баскетбол, будь это обычная игра с друзьями во дворе, либо школьный урок. В настоящее время именно детский баскетбол пользуется большой популярностью."
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
                </Div>
            </Group>
        </Fragment>

    </Panel>
);


export default Courses_stud;
