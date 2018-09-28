module ResponseHandler
  extend ActiveSupport::Concern

  included do

    rescue_from StandardError do |e|
      render_errors([{detail: e.to_s, status: 500}], 500)
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      render_errors([{detail: e.to_s, status: 404}], 404)
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      render_errors([{detail: e.to_s, status: 422}], 422)
    end

    rescue_from ApiExceptions::BaseError do |e|
      render_errors([{detail: e.message, status: e.status}], e.status)
    end

  end

  def render_json(resource, status: 200)
    render json: JSONAPI::Serializer.serialize(resource), status: status
  end

  private

  def render_errors(errors, status)
    render json: JSONAPI::Serializer.serialize_errors(errors), status: status
  end

end
