import React, {Fragment} from 'react';


import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';



const Progress = ({id, go_stud}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_stud}/>}>
            Progress
        </PanelHeader>

    </Panel>
);


export default Progress;
