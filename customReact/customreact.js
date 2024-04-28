const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    children:'Click me to visit google'
}

let container = document.getElementById('root');

function customRender(reactElement, container){
    // ITR1 for rivision
    // let ele = document.createElement(reactElement.type);
    // ele.innerHTML=reactElement.children;
    // ele.setAttribute('href',reactElement.props.href);
    // ele.setAttribute('target',reactElement.props.target);
    // container.appendChild(ele);
    let ele = document.createElement(reactElement.type);
    ele.innerHTML=reactElement.children;
    // reactElement.props.forEach(element => {
    //     ele.setAttribute('href',reactElement.props.href);
    // });
    for (const prop in reactElement.props) {
        if(prop=='children') continue;
        ele.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(ele);
}
customRender(reactElement,container); 
