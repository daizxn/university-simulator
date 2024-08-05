class Player{
    constructor(name, data ,events,gpa,credit,failClass){
        this.name = name;//玩家名字
        this.data = data;//玩家数据 Data类
        this.events = events;//玩家经历事件 存储事件id Array
        this.gpa = gpa;//绩点
        this.credit = credit;//学分
        this.failClass = failClass;//挂科次数
    }
}