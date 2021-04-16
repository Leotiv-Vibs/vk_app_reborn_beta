import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import Snackbar from "@vkontakte/vkui/dist/components/Snackbar/Snackbar";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon16ErrorCircleFill} from '@vkontakte/icons';
import FormItem from "@vkontakte/vkui/dist/components/FormItem/FormItem";

import Home from './panels/Home';
import Intro from './panels/Intro';
import Meshi from './panels/Meshi/meshi';
import Courses_stud from './panels/Stud/Courses_stud';
import Progress from './panels/Stud/Prog';
import Rod from './panels/Rod/Rod';
import Pred from './panels/Pred/Pred';
import Stud from './panels/Stud/Stud';

const ROUTES = {
    HOME: 'home',
    INTRO: 'intro',
    MESHI: 'meshi',
    COURSES: 'courses',
    PROG: 'prog',
    STUD: 'stud',
    PRED: 'pred',
    ROD: 'rod',

};

const STORAGE_KEYS = {
    STATUS: 'status',
};


const App = () => {
    const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

    const [userHasSeeIntro, setUserHasSeeIntro] = useState(false);
    const [snackBar, setSnackBar] = useState(false);
    const [role, setRole] = useState('');


    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            console.log(user);
            const storageData = await bridge.send('VKWebAppStorageGet', {
                keys: Object.values(STORAGE_KEYS)
            });

            const data = {};

            storageData.keys.forEach(({key, value}) => {

                try {
                    data[key] = value ? JSON.parse(value) : {};
                    console.log(data[key]);
                    switch (key) {
                        case STORAGE_KEYS.STATUS:

                            console.log(data[key].hasSeenIntro);
                            data[key].hasSeenIntro = false
                            if (data[key] && data[key].hasSeenIntro) {
                                setActivePanel(ROUTES.HOME);
                                setUserHasSeeIntro(true);
                            } else {
                                setActivePanel(ROUTES.INTRO);
                                setUserHasSeeIntro(false);
                            }
                            break;
                        default:
                            break
                    }
                } catch (e) {
                    setSnackBar(<Snackbar layout='vertical'
                                          onClose={() => setSnackBar(null)}
                                          before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic-red)'}}>
                                              <Icon16ErrorCircleFill fill='#fff' width='14' height='14'/>
                                          </Avatar>}
                                          duration={900}
                    >
                        Проблемка с принятием
                    </Snackbar>);

                }
            })

            setUser(user);
            setPopout(null);
        }

        fetchData();
    }, []);

    const go = panel => {
        setActivePanel(panel);
    };
    const go_meshi = panel => {
        setActivePanel(ROUTES.MESHI)
    }
    const go_home = panel => {
        setRole('');
        setActivePanel(ROUTES.HOME)
    }
    const go_prog = panel => {
        setActivePanel(ROUTES.PROG)
    }


    const go_cours = panel => {
        setActivePanel(ROUTES.COURSES)
    }
    const false_role = () => {
        setRole('')
    }

    const go_stud = panel => {
        setActivePanel(ROUTES.STUD);
    }


    const go_role = role_s => {
        console.log(role_s.role);
        if (role_s.role == 'stud') {
            go(ROUTES.STUD);
        } else if (role_s.role == 'teach') {
            go(ROUTES.PRED);
        } else if (role_s.role == 'rodit') {
            go(ROUTES.ROD);
        }
    }


    const viewIntro = async function () {
        try {
            await bridge.send('VKWebAppStorageSet', {
                key: STORAGE_KEYS.STATUS,
                value: JSON.stringify({
                    hasSeenIntro: true
                })
            });
            go(ROUTES.HOME);
        } catch (error) {
            setSnackBar(<Snackbar layout='vertical'
                                  onClose={() => setSnackBar(null)}
                                  before={<Avatar size={24} style={{backgroundColor: 'var(--dynamic-red)'}}>
                                      <Icon16ErrorCircleFill fill='#fff' width='14' height='14'/>
                                  </Avatar>}
                                  duration={900}
            >
                Проблемка c отправкой
            </Snackbar>);

        }


    }


    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} popout={popout}>


                    <Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} go={viewIntro} snackBarError={snackBar}
                           userHasSeeIntro={userHasSeeIntro}/>

                    <Home id={ROUTES.HOME} id_stud={ROUTES.STUD} id_pred={ROUTES.PRED} id_rod={ROUTES.ROD}
                          fetchedUser={fetchedUser} go={go} go_role={go_role} go_prog={go_prog} go_cours={go_cours}
                          go_meshi={go_meshi}
                          snackBarError={snackBar} role={role} o={setRole} f_r={false_role}/>


                    <Meshi id={ROUTES.MESHI} go_stud={go_stud}/>
                    <Courses_stud id={ROUTES.COURSES} go_stud={go_stud}/>
                    <Progress id={ROUTES.PROG} go_stud={go_stud}/>

                    <Stud id={ROUTES.STUD} go_home={go_home} go_prog={go_prog} go_cours={go_cours} go_meshi={go_meshi}/>
                    <Pred id={ROUTES.PRED} go_home={go_home}/>
                    <Rod id={ROUTES.ROD} go_home={go_home}/>

                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;

