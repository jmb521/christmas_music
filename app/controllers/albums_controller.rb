class AlbumsController < ApplicationController

    def index
        albums = current_user.albums

        render json: albums, status: :ok
    end
end
