import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FormItem from '@vkontakte/vkui/dist/components/FormItem/FormItem';
import SliderSwitch from '@vkontakte/vkui/dist/components/SliderSwitch/SliderSwitch';


const Home = ({id, go, fetchedUser, role, o}) => (
    <Panel id={id}>
        <PanelHeader>Хата</PanelHeader>
        {/*{!city &&*/}
        {/*<Fragment>*/}

        {/*    <FormLayout action='/profiles'>*/}
        {/*        <FixedLayout vertical='bottom'>*/}
        {/*            <Div className='inp' style={{display: 'flex'}}>*/}

        {/*            </Div>*/}
        {/*        </FixedLayout>*/}

        {/*        <FixedLayout vertical='bottom'>*/}
        {/*            <Div style={{display: 'flex'}}>*/}
        {/*                <Button className='Butto' onClick={o}>*/}
        {/*                    Отправить*/}
        {/*                </Button>*/}
        {/*            </Div>*/}

        {/*        </FixedLayout>*/}
        {/*    </FormLayout>*/}
        {/*</Fragment>*/}
        {/*}*/}


        {fetchedUser &&
        <Fragment>

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
            <h1>Ты {role}</h1>
            <h2>Ты можешь искать интересующие тебя курсы и следить за своим развитием</h2>
        </Fragment>
        }
        {role == 'teach' &&
        <Fragment>

            <h1>Ты {role}</h1>
            <h2>Ты можешь добавлять свои курсы и управлять ими прямо здесь</h2>
        </Fragment>
        }
    </Panel>
);

// Home.propTypes = {
//     id: PropTypes.string.isRequired,
//     go: PropTypes.func.isRequired,
//     fetchedUser: PropTypes.shape({
//         photo_200: PropTypes.string,
//         first_name: PropTypes.string,
//         last_name: PropTypes.string,
//         city: PropTypes.shape({
//             title: PropTypes.string,
//         }),
//     }),
// };

export default Home;
