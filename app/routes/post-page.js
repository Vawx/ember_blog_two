import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    delete( comment ) {
      comment.destroyRecord(  );
    },
    submitEdit( id, newContent ) {
      this.store.findRecord('comment', id).then( function(comment) {
        comment.set("content", newContent.content);
        comment.save( );
      });
    },
    deletePost( post ) {
      post.destroyRecord( );
      this.transitionTo('index');
    },
    submitEditPost( id, newContent ) {
      console.log( id );
      this.store.findRecord('post', id).then( function(post) {
        post.set("content", newContent.content);
        post.save( );
      });
    }
  }
});
