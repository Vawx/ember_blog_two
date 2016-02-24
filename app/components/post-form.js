import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPost() {
      var params = {
        content: this.get("content"),
        title: this.get("title"),
      };
      this.sendAction('saveNewPost', params);
    }
  }
});
