class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: request.headers['HTTP_AUTH_TOKEN'])
  end

  def login(user)
    user.reset_session_token!
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
