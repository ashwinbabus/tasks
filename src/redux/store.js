    import { createStore, applyMiddleware } from "redux";

    import reducer from './root.reducer';

    import createSagaMiddleware from "redux-saga";

    import rootSaga from '../redux/sagas/root.sagas';

    import logger from "redux-logger"

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware,logger];

    export const store = createStore(reducer,applyMiddleware(...middlewares));
    
    sagaMiddleware.run(rootSaga);
