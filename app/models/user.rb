class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :first_name, :last_name, :gender, :birthday, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_one :user_settings
  has_one :user_profile

  has_one :avatar,
    through: :user_profile,
    source: :main_image

  has_many :connections

  has_many :ratings,
    class_name: 'Rating',
    foreign_key: :rater_id

  has_many :highly_rated, -> { where rating: [4,5] },
    class_name: 'Rating',
    foreign_key: :rater_id

  has_many :highly_rated_matches,
    through: :highly_rated,
    source: :rated

  has_many :accepted_connections, -> { where status: 'Accepted' },
    class_name: "Connection",
    foreign_key: :user_id

  has_many :pending_connections, -> { where status: 'Pending' },
    class_name: "Connection",
    foreign_key: :user_id

  has_many :friends,
    through: :accepted_connections,
    source: :requested

  has_many :made_matches,
    class_name: 'Match',
    foreign_key: :matchmaker_id

  has_many :people_setup,
    through: :made_matches,
    source: :recipient

  has_many :received_matches,
    class_name: 'Match',
    foreign_key: :recipient_id

  has_many :people_setup_with_me,
    through: :received_matches,
    source: :suggested

  def suggest_matches_through_ratings
    ratings = []
    my_highly_rated_ids = self.highly_rated_matches.pluck(:id)
    User.all.each do |user|
      other_user_ratings_ids = user.highly_rated_matches.pluck(:id)
      puts "my_highly_rated_ids: #{my_highly_rated_ids}"
      if (other_user_ratings_ids & my_highly_rated_ids).count > 1
        puts "other_user_ratings_ids: #{other_user_ratings_ids}"
        ratings.concat(other_user_ratings_ids - my_highly_rated_ids)
      end
    end
    # only show unique users. Maybe use duplicate ids in ratings to provide
    # more in depth analysis of who is a good match.
    User.where(id: ratings.uniq)
  end


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def age
    dob = self.birthday
    now = Time.now.utc.to_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
