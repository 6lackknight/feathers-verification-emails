// flameup-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const flameup = new Schema({
    profile: { type: Schema.Types.ObjectId, ref: 'profile', required: true},
    transaction: { type: Schema.Types.ObjectId, ref: 'transaction' },
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true},
  }, {
    timestamps: true
  });

  return mongooseClient.model('flameup', flameup);
};
