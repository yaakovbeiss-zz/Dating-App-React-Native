json.extract! user, :id, :email, :first_name, :last_name, :gender

json.birthday user.birthday.strftime("%B " "%d, " "%Y")
json.age user.age
json.avatar user.avatar.image.url

if user.user_settings
    json.discoverable user.user_settings.discoverable
    json.messageable user.user_settings.messageable
    json.suggestable user.user_settings.suggestable
end

if user.user_profile
    json.lat user.user_profile.lat
    json.lng user.user_profile.lng
    json.bio user.user_profile.bio
    json.work user.user_profile.work
    json.education user.user_profile.education
end
