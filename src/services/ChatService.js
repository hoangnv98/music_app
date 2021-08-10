import {Api, RequestBasic} from '@common/index';
import {Config} from '@config/index';

export const ChatService = {
  init_option: async user_id => {
    let jsonPost = {
      app_id: Config.chat.appId,
      user_id: user_id,
    };
    return await RequestBasic.post(Api.Chat.init, jsonPost);
  },
  history_chat: async (group_id, page, limit) => {
    let jsonPost = {
      app_id: Config.chat.appId,
      group_id,
      page,
      limit,
    };
    return await RequestBasic.post(Api.Chat.history, jsonPost);
  },
};
