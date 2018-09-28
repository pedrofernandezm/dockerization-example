class RenameUserIdToCustomerIdInTickets < ActiveRecord::Migration[5.0]
  def change
    rename_column :tickets, :user_id, :customer_id
  end
end
