import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase";

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
});

export const fetchCollectionsSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(error => {
                dispatch(fetchCollectionsFailure(error.message))
            });
    };
};

