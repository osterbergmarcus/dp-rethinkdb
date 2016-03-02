#add to rethinkDB data explorer to watch changes
r.db("deepstream").table("testRecord").changes()