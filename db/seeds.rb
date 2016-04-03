# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


path = Path.create()
path.marks.create(date: "2016-02-05T14:35:04+01:00", latitude:"44.313044999999995", longitude: "-8.276656666666666")
path.marks.create(date: "2016-02-06T14:35:04+01:00", latitude:"45.313044999999995", longitude: "-7.276656666666666")
path.marks.create(date: "2016-02-07T14:35:04+01:00", latitude:"46.313044999999995", longitude: "-6.276656666666666")
path.marks.create(date: "2016-02-08T14:35:04+01:00", latitude:"47.313044999999995", longitude: "-5.276656666666666")
path.marks.create(date: "2016-02-09T14:35:04+01:00", latitude:"48.313044999999995", longitude: "-4.276656666666666")
path.marks.create(date: "2016-02-10T14:35:04+01:00", latitude:"49.313044999999995", longitude: "-3.276656666666666")
path.marks.create(date: "2016-02-11T14:35:04+01:00", latitude:"50.313044999999995", longitude: "-2.276656666666666")