class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.string :title
      t.date :date
      t.string :location
      t.string :team

      t.timestamps
    end
  end
end
