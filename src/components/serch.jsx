import React, { Component } from 'react';

class Serch extends Component {

    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name)
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="search" className="search"/>
                <button>Add</button>
            </form>
        );
    }
}

export default Serch;