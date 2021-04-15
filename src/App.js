import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import Snackbar from "@vkontakte/vkui/dist/components/Snackbar/Snackbar";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Icon16ErrorCircleFill} from '@vkontakte/icons';

import Home from './panels/Home';
import Intro from './panels/Intro';


const ROUTES = {
    HOME: 'home',
    INTRO: 'intro',
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
            console.log(storageData)
            const data = {};
            storageData.keys.forEach(({key, value}) => {
                try {
                    data[key] = value ? JSON.parse(value) : {};
                    switch (key) {
                        case STORAGE_KEYS.STATUS:
                            if (data[key].hasSeenIntro) {
                                setActivePanel(ROUTES.HOME);
                                setUserHasSeeIntro(true);
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

    const viewIntro = async function () {
        try {
            await bridge.send('VKWebAppStorageSet', {
                key: STORAGE_KEYS.STATUS,
                value: JSON.stringify({
                    userHasSeeIntro: true
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
                    <Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go} snackBarError={snackBar}/>
                    <Intro id={ROUTES.INTRO} fetchedUser={fetchedUser} go={viewIntro()} snackBarError={snackBar}
                           userHasSeeIntro={userHasSeeIntro}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;

