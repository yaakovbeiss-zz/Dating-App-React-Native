json.array! @users.each do |user|

  json.extract! user, :id, :email, :first_name, :last_name, :gender, :session_token
  json.birthday user.birthday.strftime("%B " "%d, " "%Y")
  json.age user.age

  json.url user.user_profile.main_image.image.url if user.user_profile

  if user.user_settings
    json.settings do
      json.id user.user_settings.id
      json.discoverable user.user_settings.discoverable
      json.messageable user.user_settings.messageable
      json.suggestable user.user_settings.suggestable
    end
  end

  if user.user_profile
    json.profile do
      json.id user.user_profile.id
      json.lat user.user_profile.lat
      json.lng user.user_profile.lng
      json.bio user.user_profile.bio
      json.work user.user_profile.work
      json.education user.user_profile.education
    end
  end

end
