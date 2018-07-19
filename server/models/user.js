var caminte = require('caminte'),

Schema = caminte.Schema;
schema = new Schema('mongoose', {host:"amazing:db123654@ds121311.mlab.com", port:"21311",database: "amazingerp"});

    var UserSchema = schema.define('user', {
         name: { type: schema.String, unique : true },
         age : { type: schema.String}
    });

    module.exports = schema.model('user', UserSchema);
