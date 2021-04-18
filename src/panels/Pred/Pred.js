import React, {Fragment} from 'react';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    List,
    Cell,
    Epic,
    Tabbar,
    Text,
    TabbarItem,
    CardScroll,
    Card,
    Div, Title
} from '@vkontakte/vkui';
import {Icon24Linked, Icon24ServicesOutline, Icon24StatisticsOutline} from "@vkontakte/icons";
import mascot from "../../img/bear.png";
import '../css/logo.css'
import { Icon24AddOutline } from '@vkontakte/icons';
import '../css/2.css'
import sh from '../Rod/sh.jpg'

const Pred = ({id, go_home, go_create_cour_in, go_my_cours}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_home}/>}>
            Pred
        </PanelHeader>

        <Fragment>
            {/*<Group>*/}
            {/*    <List>*/}
            {/*        <Cell onClick={go_my_cours}>Мои курсы</Cell>*/}
            {/*        <Cell onClick={go_create_cour_in}>Создать курс</Cell>*/}
            {/*    </List>*/}
            {/*</Group>*/}
            <Div className='User'>
                <Title level="1" size='m' weight="bold"><h1>Coursel</h1></Title>

                <img className="Persik" src={mascot} alt="Mascot"/>
                <h3>
                    <Text>
                        Здесь ты можешь следить и управлять своими курсами, а также добавлять новые.
                    </Text>
                </h3>

            </Div>
            <Group>


                <Epic tabbar={
                    <Tabbar>
                        <TabbarItem

                            onClick={go_my_cours}
                            // data-story="feed"
                            text="Мои курсы"
                        ><Icon24ServicesOutline/></TabbarItem>

                        <TabbarItem

                            onClick={go_create_cour_in}
                            text="Создать курс"
                        ><Icon24AddOutline/></TabbarItem>


                    </Tabbar>
                }/>
            </Group>
        </Fragment>

    </Panel>
);


export default Pred;
