// comment-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const comment = new Schema({
    caption: { type: String, required: true },
    profile: { type: Schema.Types.ObjectId, ref: 'profile', required: true},
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true},
    transaction: { type: Schema.Types.ObjectId, ref: 'transaction' },
    media: Map
  }, {
    timestamps: true
  });

  return mongooseClient.model('comment', comment);
};
