import React, {Fragment, useState} from 'react';

import {Panel, PanelHeader, Search, PanelHeaderBack, Group, Snackbar,Caption, Div,CardGrid, TabbarItem, Tabbar, Separator, Epic, ContentCard,CellButton} from '@vkontakte/vkui';
import {Icon28AddOutline,Icon24ServicesOutline, Icon24StatisticsOutline} from '@vkontakte/icons';

import sh from "../../img/sh.jpg";
import basket from "../../img/basketball.jpg";
import prog from "../../img/prog.jpg";


const Stud = (props) => {
    const [searchResult, hasSearchResult] = useState(false);
    const [addedToCourse, isAddToCourse] = useState(false);
    
    const addToCourse = async function(e){
        console.log(e.currentTarget.id);
        await props.sendData(props.endpointAdd, {
            course_id: e.currentTarget.id,
            user: props.user.id,
            role: 'student'
        });
        isAddToCourse(true);
        setTimeout(()=>isAddToCourse(false), 2000);
    }
    const search = async function(value){
        const result = await props.getData(`${props.endpointSearch}?name=${value}`);
        console.log(result);
        if(result) hasSearchResult(result)
    }
    const searchHandler = async function(e){
        console.log('blur');
        if(e.target.value){
            search(e.target.value);
        }
        else hasSearchResult(false);
    }    
    return(
        <Panel id={props.id}>
            <PanelHeader left={<PanelHeaderBack onClick={props.go_home}/>}>
                Личный кабинет ученика
            </PanelHeader>            
            <Search placeholder="найти новый курс" onChange={searchHandler} after={null}/>
            <Fragment>
                {searchResult?
                <Fragment>
                    <Div>
                        <Caption level="2">Для вас найдено {searchResult.length} результатов </Caption>
                    </Div>
                    <CardGrid size="l">
                    {searchResult.map((course)=>{
                        return <CellButton id={course.id} after={<Icon28AddOutline />} onClick={addToCourse}>
                                    <ContentCard
                                            subtitle={course.address}
                                            header={course.name}
                                            text={course.description}
                                            maxHeight={300}/>
                                    </CellButton>
                        })
                    }
                    </CardGrid>
                    
                </Fragment>
                :<Group>
                <Div>Рекомендации</Div>
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
                }


                <Epic tabbar={
                    <Tabbar>
                        <TabbarItem

                            onClick={props.go_cours}
                            text="Мои курсы"
                        ><Icon24ServicesOutline/></TabbarItem>

                        <TabbarItem

                            onClick={props.go_prog}
                            text="Мой прогресс"
                        ><Icon24StatisticsOutline/></TabbarItem>


                    </Tabbar>
                }/>
            </Fragment>

            {addedToCourse &&
                <Snackbar
                onClose={()=>isAddToCourse(false)}>
                Вы добавлены в группу
              </Snackbar>
            }
        </Panel>
    );
}

export default Stud;
