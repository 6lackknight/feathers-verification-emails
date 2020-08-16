// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new mongooseClient.Schema({
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    profile: { type: Schema.Types.ObjectId, ref: 'profiles', required: false },
    wallet: { type: Schema.Types.ObjectId, ref: 'wallet', required: false },
    isVerified: { type: Boolean, },
    verifyToken: { type: String, },
    verifyShortToken: { type: String, },
    verifyExpires: { type: String, },
    verifyChanges: [],
    resetToken: { type: String, },
    resetShortToken: { type: String,},
    resetExpires: { type: Date, },
  }, {
    timestamps: true
  });
  return mongooseClient.model('users', users);
};