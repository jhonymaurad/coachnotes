class Coach < ApplicationRecord
  has_many :matches, dependent: :nullify
  has_secure_password
  validates :username, presence: true

  def to_token_payload
      {
          sub: id,
          username: username
      }
  end
end
