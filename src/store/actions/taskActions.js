export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('tasks').add({
            ...task,
            authorName: profile.groupName,
            authorID: authorID,
            createdAt: new Date()
        }).then(() =>{
            dispatch({type: 'CREATE_TASK', task})
        }).catch((err) => {
            dispatch({type: 'CREATE_TASK_ERROR', err})
        })
    }
};