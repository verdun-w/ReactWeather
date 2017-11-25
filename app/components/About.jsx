var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

//If you only have the render function.

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application.</p>
            <p>
                Here are some of the tools used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Javascript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> -This was used to get the temperature of the city.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;