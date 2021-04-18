import React, {
    Fragment, useState
} from 'react';

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
    Button,
    Separator
} from '@vkontakte/vkui';

import basket from './Pred/basketball.jpg'



class CourseView extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            fetchedData :false
        };
        this.courseData = null;
        
    }
    async init(){
        this.courseData = await this.props.getData(`${this.props.endpoint}?id=${this.props.user.id}&role=${this.props.role}`);
        this.setState({fetchedData:true});
    }
    render(){
        if(!this.state.fetchedData) this.init();
        return(
            <Panel id={this.props.id}>
                <PanelHeader left={<PanelHeaderBack onClick={this.props.go_pred}/>}>
                    Мои курсы
                </PanelHeader>
                <Div>
                    <Group>
                        <CardGrid size="l">
                            {this.courseData?
                                this.courseData.map((course)=>{
                                return <Fragment>
                                        <ContentCard
                                            image={basket}
                                            subtitle={course.category}
                                            header={course.name}
                                            text={course.description}
                                            caption={course.address}
                                            maxHeight={250}/>
                                        <Separator style={{margin: '22px 0'}}/>
                                </Fragment>
                                    })
                                    : <Div>Если ваши курсы еще не загрузились, скоро они появятся...</Div>
                                    
                            }
        
                            
        
                        </CardGrid>
                    </Group>
        
        
                </Div>
        
        
            </Panel>
        );
    };
}



export default CourseView;