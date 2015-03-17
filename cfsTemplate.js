myCollectionStore = new FS.Store.GridFS("myCollection", {
  // mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB
  // mongoOptions: {...},  // optional, see note below
  // transformWrite: myTransformWriteFunction, //optional
  // transformRead: myTransformReadFunction, //optional
  // maxTries: 1, // optional, default 5
  // chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file). Default: 2MB. Reasonable range: 512KB - 4MB
});

MyCollection = new FS.Collection("myCollection", {
  stores: [myCollectionStore]
});

MyCollection.allow({
  insert: function (userId, doc) {
    return true
  },
  update: function (userId, doc, fieldNames, modifier) {
    return true
  },
  remove: function (userId, doc) {
    return true
  },
  download: function() {
    return true;
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
  },
  download: function() {
    return false;
  }
});
