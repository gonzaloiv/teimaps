class MarksController < ApplicationController
	respond_to :json
	# Sólo tiene un index para los de determinado 
	def index
		respond_with Mark.all
	end
	def create
		path = Path.find(params[:path_id])
		mark = path.marks.create(mark_params)
		respond_with mark, path 
	end

	private
	def mark_params
		params.require(:mark).permit(:date, :latitude, :longitude)
	end

end
