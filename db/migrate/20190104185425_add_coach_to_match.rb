class AddCoachToMatch < ActiveRecord::Migration[5.2]
  def change
    add_reference :matches, :coach, foreign_key: true
  end
end
