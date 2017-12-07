class Api::ProfileImagesController < ApplicationController

 def create
   @profile_image = ProfileImage.new(profile_image_params)

   if @profile_image.save
     render :show
   else
     render json: @profile_image.errors.full_messages, status: 422
   end

 end

 def index
   @profile_images = ProfileImage.all
 end

 def show
   @profile_image = ProfileImage.find(params[:id])
 end

 def destroy
   @profile_image = ProfileImage.find(params[:id])
   @profile_image.destroy
 end

 private

 def profile_image_params
   params.require(:profile_image).permit(:user_profile_id, :image, :main_image)
 end

end
