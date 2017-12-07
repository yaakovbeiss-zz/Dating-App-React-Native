class UserSettings < ApplicationRecord

  validates :discoverable, :suggestable, :messageable, presence: true
  validates :user_id, uniqueness: true

  belongs_to :user

end
