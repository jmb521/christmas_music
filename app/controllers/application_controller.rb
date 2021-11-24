class ApplicationController < ActionController::API
    include ActionController::Cookies

    # rescue_from ActiveRecord::RecordNotFound, with: :rescue_not_found


    # def rescue_not_found
    #     render json: {error: "#{self.class.name} not found"}
    # end

    # def rescue_unprocessable_entity()
        
    # end


    # def logged_in?
    #     !!current_user
    # end

    def current_user
        user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end
    

end
