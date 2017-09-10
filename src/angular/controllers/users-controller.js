const UsersController = function (app) {
	
	app.controller('UsersController', ['usersService', function (usersService) {
		const vm = this;
		
		usersService
			.getAllUsers()
			.then((users) => {
				vm.users = users;
			})
			.catch((error) => {
				vm.error = error;
			});
		
	}]);
	
};

export { UsersController };