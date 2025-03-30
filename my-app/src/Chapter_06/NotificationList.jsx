import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications: [],
        };
        this.timer = null;
    }

    componentDidMount() {
        const {notifications} = this.state;
        this.timer = setInterval(()=>{
            if (notifications.length < reservedNotification.length){
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications: notifications,
                });
            }else{
                this.setState({
                    notifications:[],
                });
                clearInterval(this.timer);
            }
        },1000);
    }

    componentDidUpdate(){
    }


    componentWillUnmount() {
        // 컴포넌트가 제거될 때 타이머 정리
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification, index) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
    
}



export default NotificationList;