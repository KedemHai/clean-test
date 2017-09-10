import angular from 'angular';

import { UsersController } from '../angular/controllers/users-controller';
import { usersService } from '../angular/services/users-service';

const app = angular.module('myCheckApp', []);

UsersController(app);
usersService(app);

