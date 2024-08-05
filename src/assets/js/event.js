export  class Event {//普通事件类
    constructor(id, title, info, activeTime, updateData) {
        this.id = id;//事件id
        this.title = title;//事件标题
        this.info = info;//事件信息
        this.activeTime = activeTime;//事件触发时间 ActiveTime类
        this.unpdateData = updateData;//事件触发后更新的数据 Data类  按照正负确定数据的加减
    }
}

export  class ActiveTime {//事件触发时间类
    constructor(beginTime, endTime) {
        this.beginTime = beginTime;//开始时间
        this.endTime = endTime;//结束时间
    }
}

