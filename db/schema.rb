# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170818034843) do

  create_table "occs", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.string "local_name"
    t.string "lat"
    t.string "lng"
    t.string "address"
    t.string "terminal_type"
    t.integer "capacity"
    t.string "installation_method"
    t.string "ori_project_code"
    t.string "ori_project_name"
    t.integer "type"
    t.string "data_collector"
    t.date "data_collect_date"
  end

end
