module TicketOperations
  extend ActiveSupport::Concern

  included do

    def index
      @tickets = current_user.tickets
      render json: @tickets
    end

    def show
      @ticket = current_user.tickets.find_by!(uuid: params[:id])
      render json: @ticket
    end

    def close
      ticket = current_user.tickets.find_by(uuid: params[:ticket_id])
      ticket.close!
      ticket.reload
      render json: ticket
    end
  end
end
