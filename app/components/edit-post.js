import Ember from 'ember';

export default Ember.Component.extend({
  showEditCommentField: false,
  lastClickedCommentID: "",
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
      this.set("showEditCommentField", false);
      this.set("lastClickedCommentID", "");
    }
  },
});
