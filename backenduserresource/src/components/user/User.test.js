const User = require('./User');

const assert = require('chai').assert;

describe('Unit test user/User', function() {
  describe('When instantiating an User', function() {
    describe('Should throw an error', function() {
      it('If email is empty', function() {
        assert.throws(() => {
          new User('', 'password');
        }, Error, 'User must have an email');
      });

      it('If email is null', function() {
        assert.throws(() => {
          new User(null, 'password');
        }, Error, 'User must have an email');
      });

      it('If email is undefined', function() {
        assert.throws(() => {
          new User(undefined, 'password');
        }, Error, 'User must have an email');
      });

      it('If email is invalid', function() {
        assert.throws(() => {
          new User('teste', 'password');
        }, Error, 'User email needs to be at least one "@" and one "."');

        assert.throws(() => {
          new User('teste@teste', 'password');
        }, Error, 'User email needs to be at least one "@" and one "."');

        assert.throws(() => {
          new User('teste.com', 'password');
        }, Error, 'User email needs to be at least one "@" and one "."');
      });

      it('If password is empty', function() {
        assert.throws(() => {
          new User('teste@teste.com', '');
        }, Error, 'User must have a password');
      });

      it('If password is null', function() {
        assert.throws(() => {
          new User('teste@teste.com', null);
        }, Error, 'User must have a password');
      });

      it('If password is undefined', function() {
        assert.throws(() => {
          new User('teste@teste.com', undefined);
        }, Error, 'User must have a password');
      });

      it('If password has less than 6 characters', function() {
        assert.throws(() => {
          new User('teste@teste.com', '12345');
        }, Error, 'Password must be at least 6 characters');
      });
    });

    describe('Should return the given email', function() {
      it('If User was instatiated properly', function() {
        const email = 'teste@teste.com';
        const user = new User(email, 'password');

        assert.equal(user.email, email);
      });
    });

    describe('Should return the given password', function() {
      it('If User was instatiated properly', function() {
        const password = 'password';
        const user = new User('teste@teste.com', password);

        assert.equal(user.password, password);
      });
    });
  });
});