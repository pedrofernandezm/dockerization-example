class Customers::TicketsController < ApplicationController

  include TicketOperations

  def index
    @tickets = current_user.tickets
    render json: @tickets
  end

  def show
    @ticket = current_user.tickets.find_by!(uuid: params[:id])
    render json: @ticket
  end

  def create
    ticket = current_user.tickets.create!(ticket_params[:ticket])
    render json: ticket, status: :created
  end

  private

  def ticket_params
    params.permit(ticket: [:subject, :description])
  end
end
