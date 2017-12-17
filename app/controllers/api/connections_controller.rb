class Api::ConnectionsController < ApplicationController

 def create
   connection = Connection.find_by(user_id: requested_id, requested_id: current_user.id )
   if connection
     connection.status = "Approved"
     connection.save
   else

     connection = Connection.new(connection_params)
     connection.user_id = current_user.id

     if connection.save
       @connections = Connection.where(["user_id = :user_id OR requested_id = :requested_id",
         { user_id: current_user.id, requested_id: current_user.id }])
       render :index
     else
       render json: connection.errors.full_messages, status: 422
     end

   end
   
 end

 def index
   @connections = Connection.where(["user_id = :user_id OR requested_id = :requested_id",
     { user_id: current_user.id, requested_id: current_user.id }])
 end

 def update
   connection = Connection.find(params[:id])

   if connection.update(connection_params)
     @connections = Connection.where(["user_id = :user_id OR requested_id = :requested_id",
       { user_id: current_user.id, requested_id: current_user.id }])
     render :index
   else
     render json: @connection.errors.full_messages, status: 422
   end
 end

 def destroy
   connection = Connection.find(params[:id])
   connection.destroy
   @connections = Connection.where(["user_id = :user_id OR requested_id = :requested_id",
     { user_id: current_user.id, requested_id: current_user.id }])
   render :index
 end

 private

 def connection_params
   params.require(:connection).permit(:user_id, :requested_id, :status)
 end

end
