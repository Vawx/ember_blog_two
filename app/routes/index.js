import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    getComments(post) {
      this.store.query('comment', {filter: { post: post } } ).then( function( comments ) {
        return comments;
      });
    },
    submitComment( params, post ) {
      var comment = this.store.createRecord('comment', {
        content: params.content,
      });

      comment.set("post", post);
      post.get('comments').pushObject(comment);
      comment.save( );
    },
  },
});
