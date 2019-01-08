class Coach < ApplicationRecord
  has_many :matches, dependent: :nullify
  has_many :players, dependent: :nullify
  has_secure_password
  validates :email, presence: true

  def to_token_payload
      {
          sub: id,
          email: email
      }
  end
end
