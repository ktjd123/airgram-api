import { UpdatesUnion } from '../outputs'

/**
 * Returns all updates needed to restore current TDLib state, i.e. all actual UpdateAuthorizationState/UpdateUser/UpdateNewChat
 * and others. This is especially usefull if TDLib is run in a separate process. This
 * is an offline method. Can be called before authorization
 * @param {Object} state
 * @returns {UpdatesUnion}
 */
export type GetCurrentStateMethod = <ResponseT = UpdatesUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
