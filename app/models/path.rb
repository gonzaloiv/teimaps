class Path < ActiveRecord::Base
	has_many :marks
	def as_json(options = {})
		super(options.merge(include: :marks))
	end
end
