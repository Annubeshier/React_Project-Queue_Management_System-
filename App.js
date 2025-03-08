// const heading = React.createElement('h1', {id:'heading'}, 'Hello world from React.');
const parent = React.createElement('div', { id: "parent" }, [[
    React.createElement('h1', {}, 'this is an H1 tag.'),
    React.createElement('h2', {}, 'this is an H2 tag.')
],
[React.createElement('h1', {}, 'this is an H1 tag.'),
React.createElement('h2', {}, 'this is an H2 tag.')]])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)