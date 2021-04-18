import React, {Fragment} from 'react';

import './css/logo.css'
import './css/2.css';
import mascot from '../img/bear.png';
import {
    Button,
    Title,
    Div,
    TooltipContainer,
    Tooltip,
    SliderSwitch,
    Avatar,
    FormItem,
    FixedLayout,
    Radio,
    FormLayout,
    Cell,
    Group,
    PanelHeader,
    Panel
} from "@vkontakte/vkui";

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
        <Fragment>

            <Group>
                <Div className='User'>
                    <Title level="1" size='m' weight="bold"><h1>Coursel</h1></Title>


                        <img className="Persik" src={mascot} alt="Mascot"/>

                    <Title level="3" weight="bold"><h2>Добро пожаловать!</h2></Title>
                    <h5>Воспользуйтесь самым лучшим приложением
                        для отслеживания активностей ваших детей!
                        Для продолжения сделайте выбор ниже.</h5>
                </Div>

                <FormLayout>
                    <Div>
                        <FormItem top="Откуда списать">

                            <Radio name="radio" value="parent" defaultChecked onClick={event => o(event.target.value)}>
                                Родитель
                            </Radio>

                            <Radio name="radio" value="student" onClick={event => o(event.target.value)}>
                                Ученик
                            </Radio>

                            <Radio name="radio" value="leader" onClick={event => o(event.target.value)}>
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
    </Panel>
);


export default Home;
