import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import withSpinner from "../../components/with-spinner/with-spinner";
import {fetchCollectionsStartAsync} from "../../redux/shop/shot.actions";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollections, isCollectionFetching, isCollectionLoaded }) => {
    useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <div className='container'>
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
            />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
