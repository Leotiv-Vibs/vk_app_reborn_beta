import React, {Fragment} from 'react';


import './css/2.css';

import {Button, Div, SliderSwitch,Avatar,FormItem,FixedLayout,Radio,FormLayout,Cell,Group,PanelHeader,Panel } from "@vkontakte/vkui";

const Home = ({
                  id,
                  id_stud,
                  id_pred,
                  id_rod,
                  snackBarError,
                  go_role,
                  fetchedUser,
                  go_prog,
                  go_cours,
                  role,
                  o,
                  f_r
              }) => (
    <Panel id={id}>

        {fetchedUser &&

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

        <Fragment>

            <Group>
                {/*<SliderSwitch*/}

                {/*    options=*/}
                {/*        {*/}
                {/*            [*/}
                {/*                {name: 'Ученик', value: 'stud'},*/}
                {/*                {name: 'Преподаватель', value: 'teach'},*/}
                {/*                {name: 'Родитель', value: 'rodit'},*/}
                {/*            ]*/}
                {/*        }*/}
                {/*    onSwitch={activeValue => {*/}
                {/*        o(activeValue)*/}
                {/*    }}*/}
                {/*/>*/}

                {role == ""}
                <FormLayout>
                    <Div>
                        <FormItem top="Откуда списать">

                            <Radio name="radio" value="rodit" defaultChecked onClick={event => o(event.target.value)}>
                                Родитель
                            </Radio>

                            <Radio name="radio" value="stud" onClick={event => o(event.target.value)}>
                                Ученик
                            </Radio>

                            <Radio name="radio" value="teach" onClick={event => o(event.target.value)}>
                                Преподаватель
                            </Radio>

                        </FormItem>
                    </Div>
                </FormLayout>


                    <Button className="Button1" style={{fontsize: '70px'}} onClick={go_role({role})}>

                    </Button>


                <h1>{role}</h1>

            </Group>
        </Fragment>

        {/*{role == 'stud' &&*/}
        {/*<Fragment>*/}
        {/*    <PanelHeader*/}
        {/*        left={<PanelHeaderBack onClick={f_r}/>}*/}
        {/*    >*/}
        {/*        Хата*/}
        {/*    </PanelHeader>*/}
        {/*    <Group>*/}
        {/*        <Cell*/}
        {/*            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}*/}
        {/*            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}*/}
        {/*        >*/}
        {/*            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}*/}
        {/*        </Cell>*/}
        {/*    </Group>*/}

        {/*    <h1>Ты {role}</h1>*/}
        {/*    <Group>*/}
        {/*        <List>*/}
        {/*            <Cell onClick={go_cours}>Мои курсы</Cell>*/}
        {/*            <Cell onClick={go_prog}>Мой прогресс</Cell>*/}
        {/*        </List>*/}
        {/*    </Group>*/}
        {/*</Fragment>*/}
        {/*}*/}

        {/*{role == 'teach' &&*/}
        {/*<Fragment>*/}
        {/*    <PanelHeader*/}
        {/*        left={<PanelHeaderBack onClick={f_r}/>}>*/}
        {/*        Хата*/}
        {/*    </PanelHeader>*/}
        {/*    <Group>*/}
        {/*        <Cell*/}
        {/*            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}*/}
        {/*            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}*/}
        {/*        >*/}
        {/*            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}*/}
        {/*        </Cell>*/}
        {/*    </Group>*/}
        {/*    <h1>Ты {role}</h1>*/}
        {/*    <h2>Ты можешь добавлять свои курсы и управлять ими прямо здесь ЕЕЕЕЕЕЕЕЕЕЕЕ о даааааааааааа</h2>*/}
        {/*    <h6>сосать уроды сосать by Cen9</h6>*/}
        {/*</Fragment>*/}
        {/*}*/}
    </Panel>
);


export default Home;
