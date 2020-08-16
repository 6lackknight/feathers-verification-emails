// transaction-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const transaction = new Schema({
  	to: { type: Schema.Types.ObjectId, ref: 'profile', required: true},
    from: { type: Schema.Types.ObjectId, ref: 'profile', required: true},
    amount: { type: Number, required: true},
    status: { type: Number, default: 0},
    code: { type: Number, default: 0, required: true},
    message: {type: String},
    payload: Map,
    content: { type: Schema.Types.ObjectId, ref: 'post'},
  }, {
    timestamps: true
  });

  return mongooseClient.model('transaction', transaction);
};
