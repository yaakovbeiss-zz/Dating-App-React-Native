class UserSettings < ApplicationRecord

  validates_inclusion_of :discoverable, :suggestable, :messageable, in: [true, false]

  validates :user_id, uniqueness: true

  belongs_to :user

end
