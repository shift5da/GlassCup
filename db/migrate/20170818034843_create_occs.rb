class CreateOccs < ActiveRecord::Migration[5.1]
  def change
    create_table :occs do |t|
      t.string :name
      t.string :code       #编码
      t.string :local_name    #本地名称
      t.string :lat        #纬度
      t.string :lng       #经度
      t.string :address    #详细名称
      t.string :terminal_type    #终端类型
      t.integer :capacity      #容量
      t.string :installation_method    #安装方式
      t.string :ori_project_code    #原始工程编号
      t.string :ori_project_name    #原始工程名称
      t.integer :type      #类型，一级光交，二级光交
      t.string :data_collector   #数据采集人
      t.date :data_collect_date   #数据采集日期
    end
  end
end
