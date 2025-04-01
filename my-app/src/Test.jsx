
import { ReactDOM } from 'react-dom/client';
import { render } from '@testing-library/react';


ReactDOM.render(<input value={"hi"}></input>, rootNode);

setTimeout(function(){
    ReactDOM.render(<input value={null}></input>,rootNode);
},1000);