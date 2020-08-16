// post-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const post = new Schema({
    profile: { type: Schema.Types.ObjectId, ref: 'profile' },
    caption: { type: String, required: true },
monetization: { type: Map, required: true},
    heading: { type: String, required: false },
    type: { type: Number, required: true },
    isRepost: { type: Boolean, required: true },
    media: { type: Map, required: false },
    transaction: { type: Schema.Types.ObjectId, ref: 'transaction' },
    clans: [{ type: String, required: true }],
    flameUps: [{ type: Schema.Types.ObjectId, ref: 'flameup' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('post', post);
};
