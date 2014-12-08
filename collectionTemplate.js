MyCollection = new Mongo.Collection("myCollection");

MyCollectionSchema = new SimpleSchema({
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
});

MyCollection.attachSchema(MyCollectionSchema);

MyCollection.allow({
  insert: function (userId, doc) {
    return true
  },
  update: function (userId, doc, fieldNames, modifier) {
    return true
  },
  remove: function (userId, doc) {
    return true
  }
});

MyCollection.deny({
  insert: function (userId, doc) {
    return false
  },
  update: function (userId, doc, fieldNames, modifier) {
    return false
  },
  remove: function (userId, doc) {
    return false
  }
});

Meteor.publish("myCollection", function () {
  return MyCollection.find();
});