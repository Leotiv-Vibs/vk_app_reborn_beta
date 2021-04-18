import React, {Fragment, useState} from 'react';

import {Panel, PanelHeader, Search, PanelHeaderBack, Group, Snackbar,List, Cell, Caption, Div,CardGrid, ContentCard,CellButton} from '@vkontakte/vkui';
import {Icon28AddOutline} from '@vkontakte/icons';
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
                Stud
            </PanelHeader>

            <h1>Ты ученик и тут будет твой функционал</h1>
            <Search placeholder="найти новый курс" onChange={searchHandler} after={null}/>
            
            <Fragment>
                <List>

                    <Cell onClick={props.go_cours}>Мои курсы</Cell>
                    <Cell onClick={props.go_prog}>Мой прогресс</Cell>
                </List>
                
                {searchResult&&
                <Fragment>
                    <Div>
                        <Caption level="2">Для вас найдено {searchResult.length} результатов </Caption>
                    </Div>
                   
                        
                    <CardGrid size="l">
                    {searchResult.map((course)=>{
                        return  <CellButton id={course.id} after={<Icon28AddOutline />} onClick={addToCourse}>
                                    <ContentCard
                                            subtitle={course.address}
                                            header={course.name}
                                            text={course.description}
                                            maxHeight={300}></ContentCard>
                        </CellButton>
                        })
                    }
                    </CardGrid>
                    
                </Fragment>
                }
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
