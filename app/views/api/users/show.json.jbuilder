json.extract! @user, :id, :email, :first_name, :last_name, :gender, :session_token
json.birthday @user.birthday.strftime("%B " "%d, " "%Y")
json.age @user.age

json.setup (!!@user.user_settings && !!@user.user_profile)
json.user_settings !!@user.user_settings
json.user_profile !!@user.user_profile

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
    json.id @user.user_settings.id
    json.discoverable @user.user_settings.discoverable
    json.messageable @user.user_settings.messageable
    json.suggestable @user.user_settings.suggestable
  end
end
