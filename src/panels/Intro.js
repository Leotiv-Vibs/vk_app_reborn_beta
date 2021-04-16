import React, {Fragment} from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import ContentCard from "@vkontakte/vkui/dist/components/ContentCard/ContentCard";

import './css/1.css';
import {Button, Group} from "@vkontakte/vkui";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const Intro = ({id, snackBarError, fetchedUser, userHasSeeIntro, go}) => {
        return (
            <Panel id={id} centered={true}>
                <PanelHeader>
                    Tracker Education
                </PanelHeader>
                {(!userHasSeeIntro && fetchedUser) &&
                <Fragment>
                    <Group>
                        <Div className='User'>
                            {fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200}/>}
                            <h2>Привет, {fetchedUser.first_name}!</h2>
                            <h4>Это сервис для трекинга оффлайн кружков!</h4>
                        </Div>
                    </Group>
                    <Div className='Button'>
                        <CardGrid size="s">
                            <ContentCard
                                image="https://pbs.twimg.com/profile_images/570586763576365056/yQpjwZsy.jpeg"
                                subtitle="ФОТОЧКА С ОПИСАНИЕМ ФУНКЦИОНАЛА"
                                header="ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ"
                                text="ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ"
                                caption="Photo by Meshi Marlboro"
                                // maxHeight={500}
                            />
                            <ContentCard
                                image="https://pbs.twimg.com/profile_images/570586763576365056/yQpjwZsy.jpeg"
                                subtitle="ФОТОЧКА С ОПИСАНИЕМ ФУНКЦИОНАЛА"
                                header="ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ "
                                text="ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ"
                                caption="Photo by Meshi Marlboro"
                                // maxHeight={500}
                            />
                            <ContentCard
                                image="https://pbs.twimg.com/profile_images/570586763576365056/yQpjwZsy.jpeg"
                                subtitle="ФОТОЧКА С ОПИСАНИЕМ ФУНКЦИОНАЛА"
                                header="ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ"
                                text="ПОЗНАКОМИТЬ ПОЛЬЗОВАТЕЛЯ С ПРИЛОЖЕНИЕМ"
                                caption="Photo by Meshi Marlboro"
                                // maxHeight={500}
                            />
                        </CardGrid>
                        <FixedLayout vertical='bottom'>

                            <Button size='l' mode='commerce' onClick={go}>
                                Ок
                            </Button>


                        </FixedLayout>
                    </Div>
                </Fragment>
                }
                {snackBarError}
            </Panel>
        )
    }
;


export default Intro;
