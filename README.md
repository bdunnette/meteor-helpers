meteor-helpers
==============

__DEPRECATED: Just use [iron-cli](https://github.com/iron-meteor/iron-cli)!__

Shell scripts to help with the setup of [Meteor.js](https://www.meteor.com/) applications.

To use from the command line, just run the [add-to-path](./add-to-path) script, or add the following to your _.bashrc_ (or _.bash_profile_ for OS X users):

```
PATH=$PATH:~/.meteor-helpers
export METEOR_HELPER_PATH=~/.meteor-helpers
```

Once installed, you can:
+ Create an app: ```meteor-create-app <appName>```
+ Add [roles](https://github.com/alanning/meteor-roles) and [accounts-admin-ui](https://github.com/hharnisc/meteor-accounts-admin-ui-bootstrap-3) to your app: ```meteor-add-roles```
+ Add a [collection](http://docs.meteor.com/#/basic/collections) with [collection2](https://github.com/aldeed/meteor-collection2), [autoform](https://github.com/aldeed/meteor-autoform) and [http-publish](https://github.com/CollectionFS/Meteor-http-publish): ```meteor-add-collection <collectionName>```
