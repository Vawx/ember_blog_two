import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPost() {
      var params = {
        content: this.get("content"),
      };
      this.sendAction('saveNewPost', params);
    }
  }
});
