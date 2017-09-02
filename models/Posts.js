var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
	/* body... */
	this.upvotes += 1;
	this.save(cb);
};

PostSchema.methods.addComment=function (commentId,cb) {
	this.comments=commentId;
	this.save(cb);
	/* body... */
}

mongoose.model('Post', PostSchema);

