// profile-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const profile = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true, unique: true },
    wallet: { type: Schema.Types.ObjectId, ref: 'wallet', required: false },
    username: { type: String, unique: false, lowercase: true, required: false },
    fullName: String,
    about: String,
    bio: String,
    gender: { type: Schema.Types.Decimal128, required: false },
    flameUps: [{ type: Schema.Types.ObjectId, ref: 'profile' }],
    clans: [String],
    profilePhotoData: Map,
    contactNumber: Number,
    dateOfBirth: Number,
    occ: String,
    author: String,
    location: String,
    email: String,
    website: String,
    portfolioUrl: String,
    ytIntroUrl: String,
  }, {
    timestamps: true
  });

  return mongooseClient.model('profile', profile);
};
