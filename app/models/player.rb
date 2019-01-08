class Player < ApplicationRecord
  belongs_to :author, class_name: 'Coach', foreign_key: 'user_id', optional: true
end
