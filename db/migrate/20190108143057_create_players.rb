class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.date :date_of_birth
      t.string :avatar
      t.string :position
      t.string :team

      t.timestamps
    end
  end
end
