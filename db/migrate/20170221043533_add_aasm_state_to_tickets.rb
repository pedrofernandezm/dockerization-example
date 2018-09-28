class AddAasmStateToTickets < ActiveRecord::Migration
  def change
    add_column :tickets, :aasm_state, :string
  end
end
