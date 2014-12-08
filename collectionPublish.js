Meteor.publish("myCollection", function () {
  return MyCollection.find();
});

// Add access points for `GET`, `POST`, `PUT`, `DELETE`
HTTP.publish({
  collection: MyCollection
}, function (data) {
  // this.userId, this.query, this.params
  return MyCollection.find({});
});