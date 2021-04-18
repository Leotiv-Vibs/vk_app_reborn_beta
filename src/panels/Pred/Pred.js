import React, {Fragment} from 'react';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Epic,
    Tabbar,
    Text,
    TabbarItem,
    Div, Title
} from '@vkontakte/vkui';
import {Icon24ServicesOutline,Icon24AddOutline} from "@vkontakte/icons";
import mascot from "../../img/bear.png";
import '../css/logo.css'
import '../css/2.css'

const Pred = ({id, go_home, go_create_cour_in, go_my_cours}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
           Личный кабинет преподавателя
        </PanelHeader>
        <Fragment>
            <Div className='User'>
                <Title level="1" size='m' weight="bold"><h1>Coursel</h1></Title>
                <img className="Persik" src={mascot} alt="Mascot"/>
                    <Text>
                        <h3>Здесь ты можешь следить и управлять своими курсами, <br/> а также добавлять новые.</h3>
                    </Text>
            </Div>
            <Group>
                <Epic tabbar={
                    <Tabbar>
                        <TabbarItem
                            onClick={go_my_cours}
                            text="Мои курсы">
                                <Icon24ServicesOutline/>
                        </TabbarItem>
                        <TabbarItem
                            onClick={go_create_cour_in}
                            text="Создать курс">
                                <Icon24AddOutline/>
                        </TabbarItem>
                    </Tabbar>
                }/>
            </Group>
        </Fragment>

    </Panel>
);


export default Pred;
