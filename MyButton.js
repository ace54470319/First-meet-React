function MyButton(props){
    const [isClick, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick:()=> setIsClicked(true)},
        isClick ? 'Clicked' : 'Click here'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);