/**
 * Action types
 * uma tipagem pra todas as ações que podem acontecer dentro do redux
 * O 'LOAD_REQUEST'  // action que o componente vai disparar para carregar os repositórios da API. Ele será ouvido pelo REDUX-SAGA que vai 
 *                  fazer a chamada da API e depois vai disparar o LOAD_SUCCESS ou LOAD_FAILURE
 */
export enum RepositoriesTypes  {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Repository{
    id: number,
    name: string
}

/*
* O formato do estado que eu vou armazenar nesse reducer
*    State  type
*/
export interface RepositoriesState{
    readonly data: Repository[],
    readonly loading: boolean,
    readonly error: boolean
}



/**
 * Reducer
 * funções
 */

/**
 * Action Creators
 * funções para disparar os types
 */