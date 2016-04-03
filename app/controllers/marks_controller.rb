class MarksController < ApplicationController
	# Sólo tiene un index para los de determinado 
	def index
		path = Path.find(params[:path_id])
		marks = path.marks.all
		respond_with marks
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
