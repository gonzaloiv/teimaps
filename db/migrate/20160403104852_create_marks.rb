class CreateMarks < ActiveRecord::Migration
  def change
    create_table :marks do |t|
      t.string :date
      t.float :latitude
      t.float :longitude
      t.references :path, index: true

      t.timestamps null: false
    end
  end
end
