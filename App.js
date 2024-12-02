const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1",{id:"child1"},"I'm a child"), 
        React.createElement("h2",{id:"child2"},"I'm second children")]
    )],
    [React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1",{id:"child1"},"I'm third child"), 
        React.createElement("h2",{id:"child2"},"I'm fourth children")]
    )]
    );

        console.log(parent);


const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello React from App!"
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);