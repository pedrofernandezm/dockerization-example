class RepliesController < ApplicationController

  def index
    @replies = ticket.replies
    render json: @replies
  end

  def create
    @reply = ticket.replies.create!(reply_params[:reply].merge(user_id: current_user.id))
    render json: @reply
  end

  private

  def ticket
    @ticket ||= Ticket.find_by!(uuid: params[:ticket_id])
  end

  def reply_params
    params.permit(reply: [:message])
  end

end
