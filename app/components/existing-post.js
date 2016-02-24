import Ember from 'ember';

export default Ember.Component.extend({
  showAdd: true,
  showSubmit: false,
  actions: {
    addComment( ) {
      this.set("showAdd",false);
      this.set("showSubmit",true);
    },
    submitComment( post ) {
      var params = {
        content: this.get("comment"),
      };
      this.sendAction("submitComment", params, post);
      this.set("showAdd",true);
      this.set("showSubmit",false);
      this.set("comment", "");
    },
  }
});
