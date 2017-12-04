json.extract! @user, :id, :email, :first_name, :last_name, :gender, :birthday, :session_token
json.user_settings !!@user.user_settings
if @user.user_settings
  json.settings do
    json.id @user.user_settings.id
    json.discoverable @user.user_settings.discoverable
    json.messageable @user.user_settings.messageable
    json.suggestable @user.user_settings.suggestable
  end
end
