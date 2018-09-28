import { local } from 'storage.io';

module.exports = {

  loggedIn(){
    var token = local.get('token');
    if ( Boolean(token) ) {
      var expirationTime = new Date(local.get('expires-at'));
      var currentTime = new Date();
      return expirationTime > currentTime;
    }
    return false;
  },

  setSession(token, expiresAt, userType, userEmail){
    return {
      session: {
        token: local.get('token'),
        expiresAt: local.get('expires-at'),
        userType: local.get('user-type')
      },
      user: {
        email: local.get('user-email')
      }
    };
  },

  loadSession(){
    return this.setSession(
                local.get('token'),
                local.get('expires-at'),
                local.get('user-type'),
                local.get('user-email')
    )
  },

  unloadSession(){
    return this.setSession('', '', '', '');
  },

  storeSession(token, expiresAt, userType, userEmail){
    local.set('token', token);
    local.set('expires-at', expiresAt);
    local.set('user-type', userType);
    local.set('user-email', userEmail);
  },

  removeSession(){
    local.remove('token');
    local.remove('expires-at');
    local.remove('user-type');
    local.remove('user-email');
  }

}
