json.extract! @user, :id, :email, :first_name, :last_name, :gender

json.birthday @user.birthday.strftime("%B " "%d, " "%Y")
json.age @user.age

json.setup (!!@user.user_settings && !!@user.user_profile)
json.user_settings !!@user.user_settings
json.user_profile !!@user.user_profile

json.friends @user.friends.each do |friend|
  json.partial! "api/users/friend", user: friend
end

if @user.user_settings
  json.settings do
    json.id @user.user_settings.id
    json.discoverable @user.user_settings.discoverable
    json.messageable @user.user_settings.messageable
    json.suggestable @user.user_settings.suggestable
  end
end

if @user.user_profile
  json.profile do
    json.id @user.user_profile.id
    json.lat @user.user_profile.lat
    json.lng @user.user_profile.lng
    json.bio @user.user_profile.bio
    json.work @user.user_profile.work
    json.education @user.user_profile.education
  end
end
