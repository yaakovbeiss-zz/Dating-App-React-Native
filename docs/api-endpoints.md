# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Session

- `GET /session/new`                  fetch current session
- `POST /session`                     create current session
- `DELETE /session`                   delete current session

## JSON API

### Users

- `GET /api/users/`                   fetch all user info
- `POST /api/users/`                  create new user
- `GET /api/users/:id`                fetch user info
- `PATCH /api/users/:id`              update user info
- `DELETE /api/users/:id`             delete current user

### User Settings

- `GET /api/user_settings/:id`        fetch user settings
- `PATCH /api/user_settings/:id`      update user settings
- `DELETE /api/user_settings/:id`     delete user settings / instead use  dependent => destroy

### User Profile

- `GET /api/user_profile/:id`         fetch user profile
- `PATCH /api/user_profile/:id`       update user profile
- `DELETE /api/user_profile/:id`      delete user profile / instead use dependent => destroy

### Profile Images

- `GET /api/profile_images/:id`       fetch user profile image
- `POST /api/profile_images`          create user profile image
- `PATCH /api/profile_images/:id`     update user profile image
- `DELETE /api/profile_images/:id`    delete user profile image

### Friends

- `GET /api/friends`                  fetch current user's friends
- `POST /api/friends`                 create new friend
- `DELETE /api/friends/:id`           delete friend

### People Dated

- `GET /api/people_dated`             fetch current user's people_dated
- `POST /api/people_dated`            create new friend
- `DELETE /api/people_dated/:id`      delete person dated

### Ratings

- `GET /api/ratings`                  fetch current user's ratings
- `POST /api/ratings`                 create new rating
- `DELETE /api/ratings/:id`           delete rating

### Dating Profile

- `GET /api/dating_profile/:id`       fetch current user dating profile
- `PATCH /api/dating_profile/:id`     update dating profile
- `DELETE /api/dating_profile/:id`    delete dating profile / instead use dependent => destroy

### Messages

- `GET /api/messages`                  fetch current user's messages
- `POST /api/messages`                 create new message
- `DELETE /api/messages/:id`           delete message
