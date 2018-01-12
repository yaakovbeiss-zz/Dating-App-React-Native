class Api::MatchesController < ApplicationController

  def create
    match = Match.new(match_params)
    match.matchmaker_id = current_user.id

    if match.save
      @matches = Match.where(["matchmaker_id = :user_id OR recipient_id = :user_id",
        {user_id: current_user.id}])
      render :index
    else
      render json: match.errors.full_messages, status: 422
    end
  end

  def index
    @matches = Match.where(["matchmaker_id = :user_id OR recipient_id = :user_id",
      {user_id: current_user.id}])
    render :index
  end

  def destroy
    match = Match.find(params[:id])
    if match.destroy
      @matches = Match.where(["matchmaker_id = :user_id OR recipient_id = :user_id",
        {user_id: current_user.id}])
      render :index
    else
      render json: match.errors.full_messages, status: 422
    end

  end

  private

  def match_params
    params.require(:match).permit(:matchmaker_id, :recipient_id, :suggested_id, :message)
  end

end
