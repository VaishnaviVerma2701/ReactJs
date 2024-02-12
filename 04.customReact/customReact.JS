 function customRender(reactElement ,container){ // this is a custom render method  for react element

     // method 1

    /*  const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement) */


    // method 02 : using loop

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
      if(prop == 'children') continue;
    domElement.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(domElement)
 }
 
 const reactElement = {
    type:'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
 } 
 
 const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)

// custom render  method is neccessary for react element/object if we do write the custome render than our element are not work 