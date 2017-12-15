import * as APIUtil from '../util/connection_api_util'

export const RECEIVE_CONNECTIONS = 'RECEIVE_CONNECTIONS';
export const RECEIVE_CONNECTIONS_ERRORS = 'RECEIVE_CONNECTIONS_ERRORS';


export const receiveConnections = connections => ({
  type: RECEIVE_CONNECTIONS,
  connections
});


export const receiveConnectionsErrors = errors => ({
  type: RECEIVE_CONNECTIONS_ERRORS,
  errors
});

export const requestConnections = () => dispatch => (
  APIUtil.fetchConnections().then(res => (
     dispatch(receiveConnections(res.data))
   ), err => (
     dispatch(receiveConnectionsErrors(err.response.data))
   )
 )
);

export const createConnection = connection => dispatch => (
  APIUtil.createConnection(connection).then( res => (
    dispatch(receiveConnections(res.data))
  ), err => (
    dispatch(receiveConnectionsErrors(err.response.data))
  )
 )
);

export const deleteConnection = id => dispatch => (
  APIUtil.deleteConnection(id).then( res => (
    dispatch(receiveConnections(res.data))
  ), err => (
    dispatch(receiveConnectionsErrors(err.response.data))
  )
 )
);

export const updateConnection = connection => dispatch => (
  APIUtil.updateConnection(connection).then( res => (
    dispatch(receiveConnections(res.data))
  ), err => (
    dispatch(receiveConnectionsErrors(err.response.data))
  )
 )
);
