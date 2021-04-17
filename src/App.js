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
import Courses_stud from './panels/Stud/Courses_stud';
import Progress_ from './panels/Stud/Prog';
import Rod from './panels/Rod/Rod';
import Pred from './panels/Pred/Pred';
import Stud from './panels/Stud/Stud';
import Create_courses_in from './panels/Pred/Create_courses_in';
import CreateCourse from "./panels/Pred/Create_courses";
import Cours_view from "./panels/Pred/Cours_view";
import Rod_cours from "./panels/Rod/Rod_cours";

const serverUrl = 'http://localhost:8000/';
const ROUTES = {
    HOME: 'home',
    INTRO: 'intro',
    COURSES: 'courses',
    PROG: 'prog',
    STUD: 'stud',
    PRED: 'pred',
    ROD: 'rod',
    CREATE_COUR_in: 'create_cour_in',
    CREATE_COUR: 'create_cour',
    COURS_VIEW: 'cours_view',
    ROD_COURS: 'rod_cours',
};
const ENDPOINT = {
    'newCourse': 'add.course',
    'userCourseList':'get.course_list',
    'searchCourse': 'get.course_students'
}
const STORAGE_KEYS = {
    STATUS: 'status',
};


const App = () => {
    const [activePanel, setActivePanel] = useState(ROUTES.HOME);
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

    const [userHasSeeIntro, setUserHasSeeIntro] = useState(false);
    const [snackBar, setSnackBar] = useState(false);
    const [role, setRole] = useState('');

    const [search, setSearch] = useState('')


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

    const go_rod = panel => {
        setActivePanel(ROUTES.ROD);
    }

    const go_pred = panel => {
        setActivePanel(ROUTES.PRED);
    }

    const go_create_cour_in = panel => {
        setActivePanel(ROUTES.CREATE_COUR_in)
    }

    const go_rod_cours = panel =>{
        setActivePanel(ROUTES.ROD_COURS)
    }

    const go_my_cours = panel => {
        setActivePanel(ROUTES.COURS_VIEW)
    }

    const go_create = panel => {
        setActivePanel(ROUTES.CREATE_COUR)
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

    const my_func = value => {
        console.log(search)
        setSearch(value)
        console.log(search)
    }

    const sendData = async function(url, data){
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
        console.log(request.status);
    }
    const getData = async function(url){
        const request = await fetch(url);
        if(request.status == 200){
            const result = await request.json();
            return result;
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


                    <Home id={ROUTES.HOME} id_stud={ROUTES.STUD} id_pred={ROUTES.PRED} id_rod={ROUTES.ROD}
                          fetchedUser={fetchedUser} go={go} go_role={go_role} go_prog={go_prog} go_cours={go_cours}
                          snackBarError={snackBar} role={role} o={setRole} f_r={false_role}/>


                    <Courses_stud id={ROUTES.COURSES} go_stud={go_stud}/>
                    <Progress_ id={ROUTES.PROG} go_stud={go_stud}/>

                    <Stud id={ROUTES.STUD} go_home={go_home} go_prog={go_prog} go_cours={go_cours} my_func={my_func}/>
                    <Pred id={ROUTES.PRED} go_home={go_home} go_create_cour_in={go_create_cour_in}
                          go_my_cours={go_my_cours}/>
                    <Rod id={ROUTES.ROD} go_home={go_home} my_func={my_func} go_rod_cours={go_rod_cours}/>

                    <Create_courses_in id={ROUTES.CREATE_COUR_in} go_pred={go_pred} go_create={go_create}/>
                    <CreateCourse id={ROUTES.CREATE_COUR} go_pred={go_pred} sendData={sendData} endpoint={serverUrl+ENDPOINT.newCourse}/>

                    <Cours_view id={ROUTES.COURS_VIEW} go_pred={go_pred}/>

                    <Rod_cours id={ROUTES.ROD_COURS} go_rod={go_rod}/>


                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;

