class HomeController < ApplicationController
  def index
  end

  def timezone
    api_key = "AIzaSyCvAe-Q_gFiX6G5HcVOAwVHiAK4M0C6Pjs"
    lat = params[:lat]
    lon = params[:lon]

    url = "https://maps.googleapis.com/maps/api/timezone/json?location=#{lat},#{lon}&timestamp=#{Time.now.to_i}&key=#{api_key}"
    response = JSON.parse(RestClient.get(url))

    render json: {offset: response["rawOffset"]}
  end
end
