class PathsController < ApplicationController
	respond_to :json
	# Sólo tiene show para mostrar uno y create para añadir
	def show 
		respond_with Path.find(params[:id])
	end
	def create 
		respond_with Path.create(post_params)
	end
	# Strong parameters
	private
	def post_params
		params.require(:path).permit(:marks)
	end
end
