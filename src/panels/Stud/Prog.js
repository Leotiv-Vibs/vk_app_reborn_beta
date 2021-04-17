import React, {Fragment} from 'react';

import {Panel,PanelHeader,PanelHeaderBack,Group,List,Cell} from '@vkontakte/vkui';

const Progress = ({id, go_stud}) => (
    <Panel id={id}>

        <PanelHeader left={<PanelHeaderBack onClick={go_stud}/>}>
            Progress
        </PanelHeader>

    </Panel>
);


export default Progress;
