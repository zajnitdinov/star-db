import React, { Component } from 'react';
import './item-details.css';
import Spinner from "../spinner";

const Record = ({item, field, label}) => {
    return(
        <li className="item">
            <span className="term">{label} </span>
            <span>{item[field]}</span>
        </li>
    )
};

export { Record };

class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        image: null
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId){
            this.setState({
                loading: true
            });
            this.updateItem();
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    onItemLoaded = (item) => {
        const { getImage } = this.props;
        this.setState({
            item,
            loading: false,
            image: getImage(item)
        })
    };

    updateItem(){
        const { itemId, getData } = this.props;
        if (!itemId) return;

        getData(itemId)
            .then((item) => { return this.onItemLoaded(item) })
    }

    render(){
        const { item, loading, image } = this.state;

        if (!item){
            return <span>Select a person from a list</span>
        }

        if (loading) {
            return <Spinner/>
        }

        return(
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img className='card-img' src={image} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className='card-body'>
                            <h5>{ item.name }</h5>
                            <div className="card-text">
                                <ul className="list">
                                    {
                                        React.Children.map(this.props.children, (child) => {
                                            return React.cloneElement(child, { item });
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetails;