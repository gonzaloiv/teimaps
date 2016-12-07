# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


path = Path.create(name: "ruta1")
path.marks.create(
  date: "2016-02-05T14:35:04+01:00",
  latitude: 43.313044999999995,
  longitude: -8.276656666666666
)
path.marks.create(
  date: "2016-02-05T14:37:05+01:00",
  latitude: 43.31303666666666,
  longitude: -8.276746666666666
)
path.marks.create(
  date: "2016-02-05T14:39:47+01:00",
  latitude: 43.31306500000001,
  longitude: -8.276561666666668
)
path.marks.create(
  date: "2016-02-06T05:41:10+01:00",
  latitude: 43.43635166666666,
  longitude: -8.243616666666666
)
path.marks.create(
  date: "2016-02-06T07:47:33+01:00",
  latitude: 43.43438833333333,
  longitude: -8.245056666666667
)
path.marks.create(
  date: "2016-02-06T19:21:41+01:00",
  latitude: 43.43405333333333,
  longitude: -8.24534
)
path.marks.create(
  date: "2016-02-06T21:16:43+01:00",
  latitude: 43.43181333333334,
  longitude: -8.247446666666667
)
path.marks.create(
  date: "2016-02-07T00:07:49+01:00",
  latitude: 43.43418833333333,
  longitude: -8.24447
)
path.marks.create(
  date: "2016-02-07T03:37:19+01:00",
  latitude: 43.434021666666666,
  longitude: -8.245468333333333
)
path.marks.create(
  date: "2016-02-07T11:51:53+01:00",
  latitude: 43.43376166666667,
  longitude: -8.245894999999999
)
path.marks.create(
  date: "2016-02-07T13:54:38+01:00",
  latitude: 43.43393833333333,
  longitude: -8.245528333333334
)
path.marks.create(
  date: "2016-02-07T15:10:24+01:00",
  latitude: 43.434036666666664,
  longitude: -8.245921666666668
)
path.marks.create(
  date: "2016-02-07T17:36:39+01:00",
  latitude: 43.433845000000005,
  longitude: -8.245446666666668
)
path.marks.create(
  date: "2016-02-07T18:08:29+01:00",
  latitude: 43.433845000000005,
  longitude: -8.245446666666668
)

path2 = Path.create(name: "ruta2")
path2.marks.create(
  date: "2016-02-05T14:35:04+01:00",
  latitude: 42.313044999999995,
  longitude: -8.276656666666666
)
path2.marks.create(
  date: "2016-02-05T14:37:05+01:00",
  latitude: 42.31303666666666,
  longitude: -8.276746666666666
)
path2.marks.create(
  date: "2016-02-05T14:39:47+01:00",
  latitude: 42.31306500000001,
  longitude: -8.276561666666668
)
path2.marks.create(
  date: "2016-02-06T05:41:10+01:00",
  latitude: 42.43635166666666,
  longitude: -8.243616666666666
)
path2.marks.create(
  date: "2016-02-06T07:47:33+01:00",
  latitude: 42.43438833333333,
  longitude: -8.245056666666667
)
path2.marks.create(
  date: "2016-02-06T19:21:41+01:00",
  latitude: 42.43405333333333,
  longitude: -8.24534
)
path2.marks.create(
  date: "2016-02-06T21:16:43+01:00",
  latitude: 42.43181333333334,
  longitude: -8.247446666666667
)
path2.marks.create(
  date: "2016-02-07T00:07:49+01:00",
  latitude: 42.43418833333333,
  longitude: -8.24447
)
path2.marks.create(
  date: "2016-02-07T03:37:19+01:00",
  latitude: 42.434021666666666,
  longitude: -8.245468333333333
)
path2.marks.create(
  date: "2016-02-07T11:51:53+01:00",
  latitude: 42.43376166666667,
  longitude: -8.245894999999999
)
path2.marks.create(
  date: "2016-02-07T13:54:38+01:00",
  latitude: 42.43393833333333,
  longitude: -8.245528333333334
)
path2.marks.create(
  date: "2016-02-07T15:10:24+01:00",
  latitude: 42.434036666666664,
  longitude: -8.245921666666668
)
path2.marks.create(
  date: "2016-02-07T17:36:39+01:00",
  latitude: 42.433845000000005,
  longitude: -8.245446666666668
)
path2.marks.create(
  date: "2016-02-07T18:08:29+01:00",
  latitude: 42.433845000000005,
  longitude: -8.245446666666668
)
