import Ember from 'ember';

export default Ember.Component.extend({
  showEditCommentField: false,
  showEditPostField: false,
  lastClickedCommentID: "",
  lastClickedPostID: "",
  actions: {
    delete( comment ) {
      this.sendAction('delete', comment);
    },
    edit( comment ) {
      this.set("showEditCommentField", true);
      this.set("editCommentField", comment.get("content"));
      this.set("lastClickedCommentID", comment.get("id"));
    },
    submitEdit( ){
      var content = {
        content: this.get("editCommentField"),
      };
      this.sendAction('submitEdit', this.get("lastClickedCommentID"), content);
      this.set("editCommentField", "");
      this.set("showEditCommentField", false);
      this.set("lastClickedCommentID", "");
    },
    deletePost( post ) {
      this.sendAction('deletePost', post);
    },
    editPost( post ) {
      this.set("showEditPostField", true);
      this.set("editPostField", post.get("content"));
      this.set("lastClickedPostID", post.get("id"));
    },
    submitEditPost( ) {
      var content = {
        content: this.get("editPostField"),
      };
      this.sendAction("submitEditPost", this.get("lastClickedPostID"), content);
      this.set("editCommentField", "");
      this.set("showEditPostField", false);
      this.set("lastClickedPostID", "");
    }

  },
});
