import React, {Fragment} from 'react';

import './css/logo.css'
import './css/2.css';
import './css/home.css'
import mascot from '../img/bear.png';
import {
    Button,
    Title,
    Div,
    FormItem,
    Radio,
    FormLayout,
    Group,
    Separator,
    Text,
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
            <Group>
                <Div className='User'>
                    <Title level="1" size='m' weight="bold"><h1>Coursel</h1></Title>
                    <img className="Persik" src={mascot} alt="Mascot"/>
                    <Title level="3" weight="bold"><h2>Добро пожаловать!</h2></Title>
                    <Text weight="medium" >Воспользуйтесь самым лучшим приложением <br/>
                        для отслеживания активностей ваших детей! <br/>
                        Для продолжения сделайте выбор ниже.</Text>
                </Div>
                <FormLayout>
                    <Div>
                        <FormItem top="Выберите роль">
                            <Div className='choose' >
                                <Radio name="radio" value="parent" defaultChecked onClick={event => o(event.target.value)}>Родитель</Radio>
                                    <Separator style={{ margin: '12px 0' }} />
                                <Radio name="radio" value="student" onClick={event => o(event.target.value)}>Ученик</Radio>
                                    <Separator style={{ margin: '12px 0' }} />
                                <Radio name="radio" value="leader" onClick={event => o(event.target.value)}>Преподаватель</Radio>
                            </Div>
                        </FormItem>
                    </Div>
                </FormLayout>
                <Button className="Button1" style={{fontsize: '70px'}} onClick={go_role({role})}></Button>
            </Group>
    </Panel>
);


export default Home;
