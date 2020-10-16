import React from "react";
import { connect } from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div className="collection-preview">
            <h2 className="collection-preview__title">{title}</h2>
            <div className="collection-preview__list">
                {
                    items.map(item => <CollectionItem id={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
