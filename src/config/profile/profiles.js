let profiles = require('./profiles.json');

exports.profile = function(profile) {
    let node_env = '';
    if (profile) {
        node_env = profile;
    } else {
        node_env = process.env.NODE_ENV;
    }
    if(!node_env) {
        return profiles['desenvolvimento'];
    } else {
        switch (node_env) {
            case 'teste':
                return profiles[node_env];
            case 'homologacao':
                return profiles[node_env];
            default:
                return profiles['desenvolvimento'];
        }
    }
};
