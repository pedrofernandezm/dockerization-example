class Agent < User

  def tickets
    Ticket.all
  end

end
