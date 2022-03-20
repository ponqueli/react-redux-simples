import { createStore, Store } from 'redux';
import { RepositoriesState } from './ducs/repositories/types';

import rootReducer from './ducs/rootReducer';

export interface ApplicationState {
    repositories: RepositoriesState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
