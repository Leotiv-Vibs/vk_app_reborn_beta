import React, {Fragment} from 'react';


import {FormItem, Div, Textarea, Select, Input, PanelHeader, Panel, PanelHeaderBack, Button, FormLayout,Snackbar} from "@vkontakte/vkui";

class CreateCourse extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name: '',
            category:'',
            address:'',
            description:'',
            user: props.user.id
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        const { name, value } = e.currentTarget;
        console.log(this.state);
        this.setState({[name]: value });
    }
    onSubmit(e){
        e.preventDefault();
        const data = this.state;
        this.props.sendData(this.props.endpoint, data);
        this.setState({successSendData: true});
    }
    render(){
        return <Panel id={this.props.id}>

        <PanelHeader left={<PanelHeaderBack onClick={this.props.go_pred}/>}>
            Создать курс
        </PanelHeader>
        <Div>
            <FormLayout onSubmit={this.onSubmit}>
                <FormItem top="Название кружка">
                    <Input type="text" placeholder="Введите название кружка" name="name" onChange={this.onChange}/>
                </FormItem>
                <FormItem top="Категория">
                    <Select name="category" onChange={this.onChange}
                        placeholder="Выберите категорию кружка"
                        options={[
                            {value: '1', label: 'Спорт'},
                            {value: '2', label: 'Музыка'},
                            {value: '3', label: 'Танец'},
                            {value: '4', label: 'Изобразительное искусство'},
                            {value: '5', label: 'Сценическое искусство'},
                            {value: '6', label: 'Кулинария'},
                            {value: '7', label: 'Программирование'},
                            {value: '8', label: 'Технические науки'},
                        ]}
                    />
                </FormItem>
                <FormItem top="Адрес">
                    <Input type="text" placeholder="Введите адрес" name="address" onChange={this.onChange}/>
                </FormItem>
                <FormItem top="О кружке">
                    <Textarea name="description" placeholder="Введите описание кружка" onChange={this.onChange}/>
                </FormItem>
            </FormLayout>
            <FormItem>
                <Button stretched size='l' onClick={this.onSubmit}>Отправить данные</Button>
            </FormItem>
        </Div>
        
        {this.state.successSendData &&
            <Snackbar
            onClose={()=>this.state.successSendData(false)}>
                Вы успешно добавили курс! <br/> Вернитесь назад, чтобы убедиться в этом:)
            </Snackbar>        
        }
    </Panel>
    }
    
}


export default CreateCourse;
