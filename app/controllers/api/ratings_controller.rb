class Api::RatingsController < ApplicationController

 def create

   rating = Rating.new(rating_params)
   rating.rater_id = current_user.id

   if rating.save
     @ratings = Rating.find_by(rater_id: current_user.id)
     render :index
   else
     render json: rating.errors.full_messages, status: 422
   end

 end

 def index
   @ratings = Rating.where(rater_id: current_user.id)
 end

 def update
   rating = Rating.find(params[:id])

   if rating.update(rating_params)
     @ratings = Rating.find_by(rater_id: current_user.id)
     render :index
   else
     render json: @rating.errors.full_messages, status: 422
   end
 end

 def destroy
   rating = Rating.find(params[:id])
   rating.destroy
   @ratings = Rating.find_by(rater_id: current_user.id)
   render :index
 end

 private

 def rating_params
   params.require(:rating).permit(:rater_id, :rated_id, :rating)
 end

end
