const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    default: ''
  },
  timestamp: {
      type: Date,
      default: Date.now()
  },
  is_deleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Counter', UserSessionSchema);
