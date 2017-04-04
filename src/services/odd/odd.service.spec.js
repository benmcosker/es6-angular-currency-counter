import OddService from './conversion.service';

xdescribe('tgh.services.odd', () => {
  let oddService;

  beforeEach(inject(function() {
    oddService = new OddService();
  }));

  afterEach(function() {
    oddService = null;
  });

  xit('should test the service exists', () => {
    expect(OddService).toBeDefined();
    expect(oddService).toBeDefined();
    expect(oddService.getUsers).toBeDefined();
    expect(oddService.getPrimaryUser).toBeDefined();
    expect(oddService.addUser).toBeDefined();
    expect(oddService.deleteUser).toBeDefined();
  });

  xit('should test that first call to getUsers returns expected default users', () => {
    let users = oddService.getUsers();

    expect(users.length).toBe(2);

    expect(users[0].id).toBe(1);
    expect(users[0].firstName).toBe('Owen');
    expect(users[0].lastName).toBe('Buckley');
    expect(users[0].isPrimary).toBe(true);

    expect(users[1].id).toBe(2);
    expect(users[1].firstName).toBe('The');
    expect(users[1].lastName).toBe('Greenhouse');
    expect(users[1].isPrimary).toBe(false);
  });

  xit('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = new OddService().getPrimaryUser();

    expect(primaryUser.id).toBe(1);
    expect(primaryUser.firstName).toBe('Owen');
    expect(primaryUser.lastName).toBe('Buckley');
    expect(primaryUser.isPrimary).toBe(true);
  });

  xit('should test that addUsers call works as expected', () => {
    let users = [];
    let found = false;
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    oddService.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = oddService.getUsers();

    // test new user was added
    users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        found = true;
      }
    });

    expect(found).toBe(true);
  });

  xit('should test that getPrimaryUser call works as expected', () => {
    let primaryUser = oddService.getPrimaryUser();

    expect(primaryUser.id).toBe(1);
    expect(primaryUser.firstName).toBe('Owen');
    expect(primaryUser.lastName).toBe('Buckley');
    expect(primaryUser.isPrimary).toBe(true);
  });

  xit('should test that deleteUsers call works as expected when starting with default users', () => {
    let users = [];
    let user = {};
    let newUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    // add a user
    oddService.addUser(newUser.firstName, newUser.lastName);

    // get users
    users = oddService.getUsers();

    // get our user
    user = users.filter((user) => {
      if ((user.firstName + user.lastName) === (newUser.firstName + newUser.lastName)) {
        return user;
      }
    })[0];

    // add a user
    oddService.deleteUser(user.id);

    // get users
    users = oddService.getUsers();

    expect(users.length).toBe(2);

    expect(users[0].id).toBe(1);
    expect(users[0].firstName).toBe('Owen');
    expect(users[0].lastName).toBe('Buckley');
    expect(users[0].isPrimary).toBe(true);

    expect(users[1].id).toBe(2);
    expect(users[1].firstName).toBe('The');
    expect(users[1].lastName).toBe('Greenhouse');
    expect(users[1].isPrimary).toBe(false);
  });

});
