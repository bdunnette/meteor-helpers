Accounts.onLogin(function (users) {
  /* if there's only one user, add that user to admin group */
  if (Meteor.users.find().count() === 1) {
    Roles.addUsersToRoles(users.user._id, ['admin']);
  }
});