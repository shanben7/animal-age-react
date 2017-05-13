/**
 * Created by Shannon on 2017-05-03.
 */
const React = require("react");

const Input = React.createClass({

    handleChange: function (e) {
        let age = Number(e.target.value);
        this.props.onChange(age);
    },

    renderSelect: function () {
        var result = [];

        for (var i = 1; (this.props.lifespan) ? i <=10 : i <=20; i++) {
                result.push(<option value={i}>{i}</option>);
            }
            return result;
    },

    render: function () {
        return (
            <div>
                <select id="age" onChange={this.handleChange}>{this.renderSelect()}</select>
            </div>
        );
    }
});


module.exports = Input;


