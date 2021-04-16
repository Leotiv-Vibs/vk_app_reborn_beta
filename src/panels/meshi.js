import React, {Fragment} from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import logo from './meskhi-1.jpg';
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";



const Meshi = ({id,go_home}) => (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go_home}/>}
        >MESHI</PanelHeader>
        <Div><img src={logo}/></Div>

    </Panel>
);



export default Meshi;
