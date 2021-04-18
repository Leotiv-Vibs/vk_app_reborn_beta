import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View,ScreenSpinner, AdaptivityProvider,AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Courses_stud from './panels/Stud/Courses_stud';
import Progress_ from './panels/Stud/Prog';
import Rod from './panels/Rod/Rod';
import Pred from './panels/Pred/Pred';
import Stud from './panels/Stud/Stud';
import Create_courses_in from './panels/Pred/Create_courses_in';
import CreateCourse from "./panels/Pred/Create_courses";
import CourseView from "./panels/CourseView";
import Rod_cours from "./panels/Rod/Rod_cours";

const serverUrl = 'https://craftida.ru/';
const ROUTES = {
    HOME: 'home',
    INTRO: 'intro',
    COURSES: 'courses',
    PROG: 'prog',
    STUD: 'student',
    PRED: 'pred',
    ROD: 'rod',
    CREATE_COUR_in: 'create_cour_in',
    CREATE_COUR: 'create_cour',
    COURS_VIEW: 'cours_view',
    ROD_COURS: 'rod_cours',
};
const ENDPOINT = {
    'newCourse': serverUrl+'add.course',
    'userCourseList':serverUrl+'get.course_list',
    'searchCourse': serverUrl+'get.course_by_name',
    'addToCourse': serverUrl+'add.course_user'
}


const App = () => {
    const [activePanel, setActivePanel] = useState(ROUTES.HOME);
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [role, setRole] = useState('');
    const [modal_card, setCard] = useState(false);
    const [ssilka, setSsilka] = useState('')


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
        if (role_s.role == 'student') {
            go(ROUTES.STUD);
        } else if (role_s.role == 'leader') {
            go(ROUTES.PRED);
        } else if (role_s.role == 'parent') {
            go(ROUTES.ROD);
        }
    }

   const prev_view = function(currentRoute){
        return id; 
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

    return (
        <AdaptivityProvider>
            <AppRoot>
                {console.log(fetchedUser)}
                <View activePanel={activePanel} popout={popout}>
                    <Home id={ROUTES.HOME} id_stud={ROUTES.STUD} id_pred={ROUTES.PRED} id_rod={ROUTES.ROD}
                          fetchedUser={fetchedUser} go={go} go_role={go_role} go_prog={go_prog} go_cours={go_my_cours}
                          role={role} o={setRole} f_r={false_role}/>
                    <Courses_stud id={ROUTES.COURSES} go_stud={go_stud}/>
                    <Progress_ id={ROUTES.PROG} go_stud={go_stud}/>
                    <Stud user={fetchedUser} sendData={sendData} endpointAdd={ENDPOINT.addToCourse} id={ROUTES.STUD} go_home={go_home} go_prog={go_prog} go_cours={go_my_cours} getData={getData} endpointSearch={ENDPOINT.searchCourse}/>
                    <Pred id={ROUTES.PRED} go_home={go_home} go_create_cour_in={go_create_cour_in}
                          go_my_cours={go_my_cours}/>
                    <Rod id={ROUTES.ROD} go_home={go_home} go_rod_cours={go_rod_cours} modal_card={modal_card} setCard={setCard} ssilka={ssilka} s={setSsilka}/>
                    <Create_courses_in id={ROUTES.CREATE_COUR_in} go_pred={go_pred} go_create={go_create}/>
                    <CreateCourse role={role} id={ROUTES.CREATE_COUR} go_pred={go_pred} user={fetchedUser} sendData={sendData} endpoint={ENDPOINT.newCourse}/>
                    <CourseView role={role} id={ROUTES.COURS_VIEW} endpoint={ENDPOINT.userCourseList} go_pred={go_pred} getData={getData} user={fetchedUser}/>
                    <Rod_cours id={ROUTES.ROD_COURS} go_rod={go_rod}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;

