var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return(
        <div>
            <h1 classname="text-center">Examples</h1>
            <p>Here are a few examples location to try out:</p>
            <ol>
                <li><Link to="/?location=George">George</Link></li>
                <li><Link to="/?location=Rio">Rio</Link></li>
            </ol>
        </div>
    );
};

module.exports = Example;