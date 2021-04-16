import React, {Fragment} from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import List from '@vkontakte/vkui/dist/components/List/List';

import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FormItem from '@vkontakte/vkui/dist/components/FormItem/FormItem';
import SliderSwitch from '@vkontakte/vkui/dist/components/SliderSwitch/SliderSwitch';


const Home = ({id, go, fetchedUser, go_prog, go_meshi,go_cours, role, o, f_r}) => (
    <Panel id={id}>

        {(!role && fetchedUser) &&

        <Fragment>
            <PanelHeader>
                Хата
            </PanelHeader>
            <Group>
                <Cell
                    before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                    description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                >
                    {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                </Cell>
            </Group>
        </Fragment>}
        {!role &&
        <Fragment>

            <Group>
                <FormItem top="Роль">
                    <SliderSwitch

                        options={[{name: 'Ученик', value: 'stud'}, {name: 'Преподаватель', value: 'teach'}]}
                        onSwitch={activeValue => {
                            o(activeValue)
                        }}
                    />

                </FormItem>
            </Group>
        </Fragment>
        }
        {role == 'stud' &&
        <Fragment>
            <PanelHeader
                left={<PanelHeaderBack onClick={f_r}/>}
            >
                Хата
            </PanelHeader>
            <Group>
                <Cell
                    before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                    description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                >
                    {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                </Cell>
            </Group>

            <h1>Ты {role}</h1>
            <Group>
                <List>
                    <Cell onClick={go_cours}>Мои курсы</Cell>
                    <Cell onClick={go_prog} >Мой прогресс</Cell>
                    <Cell onClick={go_meshi}>Предложение от месхи</Cell>
                </List>
            </Group>
        </Fragment>
        }

        {role == 'teach' &&
        <Fragment>
            <PanelHeader
                left={<PanelHeaderBack onClick={f_r}/>}>
                Хата
            </PanelHeader>
            <Group>
                <Cell
                    before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                    description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                >
                    {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                </Cell>
            </Group>
            <h1>Ты {role}</h1>
            <h2>Ты можешь добавлять свои курсы и управлять ими прямо здесь ЕЕЕЕЕЕЕЕЕЕЕЕ о даааааааааааа</h2>
            <h6>сосать уроды сосать by Cen9</h6>
        </Fragment>
        }
    </Panel>
);



export default Home;
