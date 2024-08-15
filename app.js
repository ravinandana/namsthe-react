/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is child H1 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
// const heading = React.createElement("h1",
//     {id: "demo", class: "styleClass"},
//     "Hello from React Library");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement("div",{id:"child"} ,[React.createElement("h1",{},"am H1 Tag"),React.createElement("h2",{},"H2 Tag")])
// )

const heading = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement("div",{id:"child1"} ,[React.createElement("h1",{},"am H1 Tag"),React.createElement("h2",{},"H2 Tag")]),
        React.createElement("div",{id:"child2"} ,[React.createElement("h1",{},"am H1 Tag"),React.createElement("h2",{},"H2 Tag")])
    ]
    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);