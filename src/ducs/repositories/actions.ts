/**Funções que disparam os nossos TYPES */
//action menos verbosa
import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = ()=> action(RepositoriesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, {data});
export const loadFailure = ()=> action(RepositoriesTypes.LOAD_FAILURE);