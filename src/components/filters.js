import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from './filter';
import { handleSelectFilter, handleDeSelectFilter } from '../actions/filters';


class Filters extends Component {

    handleSelectFilter = (e) => {
        e.preventDefault();
        this.props.dispatch(handleSelectFilter({ 'label': e.currentTarget.dataset.label, 'link': e.currentTarget.dataset.link }))
    }
    handleDeselectFilter = (e) => {
        e.preventDefault();
        this.props.dispatch(handleDeSelectFilter({ 'label': e.currentTarget.dataset.label, 'link': e.currentTarget.dataset.link }))
    }

    render() {
        const { filters } = this.props;

        if (!filters.filters) {
            return (<p>No Filters Found</p>)
        }

        return (
            <div className="app__filters">
                <h2>Selected Filters</h2>
                <div className="app__filters-selected">{filters.selectedFilter ? <div><span>{filters.selectedFilter}</span> <button onClick={this.handleDeselectFilter}>X</button></div> : ''}</div>

                <ul>
                    {Object.values(filters.filters).map(filter => (
                        <Filter filter={filter} handleSelectFilter={this.handleSelectFilter} />
                    ))}
                </ul>
            </div >
        )
    }

}

const mapStateToProps = state => ({ filters: state.filters });

export default connect(mapStateToProps)(Filters)