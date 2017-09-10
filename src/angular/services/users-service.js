import { User } from '../../shared/user';


const usersService = function(app) {
	
	app.factory('usersService', function($http) {
		const publicAPI = {};
		const usersUrl = 'https://jsonplaceholder.typicode.com/users';
		const errorMessage = 'Something went wrong with getting the data...';
		
		publicAPI.getAllUsers = () => {
			return $http
					.get(usersUrl)
					.then((response) => {
						return response.data.map((user) => {
							return new User(user);
						});
					})
					.catch((error) => {
						throw { errorMessage, error };
					});
		};
		
		return publicAPI;
	});
};

export { usersService };