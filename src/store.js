import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Puedes usar sessionStorage o localStorage

import rootReducer from './reducers/authReducer';

const persistConfig = {
    key: 'root', // La clave para identificar la persistencia en el almacenamiento
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);