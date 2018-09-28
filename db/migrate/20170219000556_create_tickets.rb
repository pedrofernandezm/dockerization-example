class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string :subject
      t.text :description
      t.integer :user_id
      t.string :uuid

      t.timestamps
    end
  end
end
