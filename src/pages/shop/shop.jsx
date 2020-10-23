import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase";
import { updateCollections } from "../../redux/shop/shot.actions";
import withSpinner from "../../components/with-spinner/with-spinner";

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

       collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            setLoading(false);
       });
    }, []);

    return (
        <div className='container'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
