# Changelog

## [2.1.0] - 2018-11-28
### Changed
- updated npm dependencies to latest version (mongodb, nodemailer, @types/node, @types/redis, node-fetch, nodemon)
- removed variable, in User model activateUser(), that was only used once

## [2.0.0] - 2018-11-27
### Added
- Support for RabbitMQ message queue as another way of handling events inside the application, besides sockets
- Documentation on the new event dispatchers and how to dispatch events through a socket and/or a queue

### Changed
- Refactored the event dispatchers, making it easier to create new dispatcher funtions for either socket or message queue based events
- Refactored the User Model module. It is now broken into multiple smaller modules
- Removed the hashed password from the User resource returned with the 201 response on a successful account activation
- Reorganized the typescript types. They are now in a dedicated file

## [1.1.0] - 2018-11-22
### Added
- Added migrations for the MongoDB database
- Added schema validation to the users collection in MongoDB
- Added authentication to the MongoDB docker container
- Added setup script to the MongoDB container that creates the user used by the application, on container bootup

### Changed
- Moved the typescript interfaces defining the DB schema for the users collection into a dedicated file
- Cleaned up docker containers directory structure, in development environment
- Updated docker-compose and Dockerfiles to match new container directory structure

### Fixed
- Fixed typo in an interface file, in the webServer service

## [1.0.1] - 2018-11-19
### Fixed
- Fixed typo in environment variable use in the code

## [1.0.0] - 2018-11-19
### Added
- First version of the code