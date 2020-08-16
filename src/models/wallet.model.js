// wallet-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const wallet = new Schema({
    privateKey: String,
    publicKey: { type: String, unique: true, lowercase: false },
    transactions: [{ type: Schema.Types.ObjectId, ref: 'transaction' }],
    profile: { type: Schema.Types.ObjectId, ref: 'profile', unique: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('wallet', wallet);
};
